import React, { useEffect } from "react";
import useStyles from "./style";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Grid, Card, CardMedia, CardContent } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import FilterBtns from "./FilterBtns/FilterBtns";
import SearchBar from "../navbar/SearchBar";

import {
  fetchPreviewBooks,
  fetchExactBook,
  fetchAllName,
} from "../../actions/book";
import Loader from "../Loader/Loader";
import { changePage } from "../../Slices/books";
import SingleBookGroup from "./SingleBookGroup/SingleBookGroup";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { books, loading, page, totalNum, currentSec, booksbyCategory } =
    useSelector((store) => store.books);
  const { darkMode } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(fetchPreviewBooks());
    dispatch(fetchAllName());
  }, [dispatch]);

  const handleChange = (e, p) => {
    dispatch(changePage(p));
  };

  const handleClick = (id, category) => {
    dispatch(fetchExactBook(id));
    navigate(`/${id}`);
  };

  return (
    <div
      className={
        darkMode ? `${classes.homeWrapperDrkM}` : `${classes.homeWrapper}`
      }
    >
      <Grid style={{ height: "auto" }} container spacing={1}>
        <Grid
          className={
            darkMode ? `${classes.btnContainerDrkM}` : `${classes.btnContainer}`
          }
          style={{ marginTop: ".3rem" }}
          item
          md={2}
        >
          <FilterBtns />
        </Grid>
        <Grid
          className={
            darkMode
              ? `${classes.previewBookWrapperDrkM}`
              : `${classes.previewBookWrapper}`
          }
          item
          xs={12}
          md={10}
        >
          <div className={classes.showInDevice} style={{ paddingTop: ".3rem" }}>
            <SearchBar width={"79%"} />
          </div>
          {currentSec === "All Books" ? (
            <div style={{ width: "100%", minHeight: "100vh" }}>
              {loading === true ? (
                <Loader />
              ) : (
                <>
                  {books?.map((bookGroup, index) => (
                    <SingleBookGroup key={index} bookGroup={bookGroup} />
                  ))}
                </>
              )}
            </div>
          ) : (
            <div>
              <h1 className={classes.exactBooktitle}>{currentSec}</h1>
              <Grid
                className={classes.exactBookbyCategoryGrid}
                container
                spacing={2}
              >
                {loading ? (
                  <Loader />
                ) : (
                  <>
                    {booksbyCategory?.map((book) => {
                      const url = book.coverImage;
                      const urlBase = "https://cdn.asaha.com/assets/thumbs";
                      const urlSecondP =
                        url.split("/")[url.split("/").length - 2];
                      const urlLastP = url
                        .split("/")
                        [url.split("/").length - 1].split("-")[0];
                      const newUrl = `${urlBase}/${urlSecondP}/${urlLastP}.jpg`;
                      return (
                        <Grid item>
                          <Card
                            style={{
                              boxShadow: " rgba(0, 0, 0, 0.24) 3px 3px 8px",
                              width: "160px",
                            }}
                            onClick={() => handleClick(book._id, book.category)}
                          >
                            <CardMedia
                              component="img"
                              style={{
                                width: "100%",
                                height: "200px",
                              }}
                              alt="green iguana"
                              image={newUrl}
                            />
                            <CardContent
                              style={{
                                padding: ".1rem",
                                textTransform: "capitalize",
                              }}
                            >
                              {book.title.length > 11
                                ? book.title.slice(0, 18) + "..."
                                : book.title}
                              <br />
                              {book.downloadCount && book.downloadCount}
                              <br />
                              {`${book.pageCount}  / ${book.publishAdt} / ${book.fileSize}`}
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })}
                  </>
                )}
              </Grid>
              {loading ? (
                <Loader />
              ) : (
                <Stack
                  className={
                    darkMode
                      ? `${classes.paginationDrkM}`
                      : `${classes.pagination}`
                  }
                  spacing={2}
                >
                  <Pagination
                    count={totalNum}
                    color="success"
                    page={page}
                    onChange={handleChange}
                    style={{ margin: "auto" }}
                  />
                </Stack>
              )}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
