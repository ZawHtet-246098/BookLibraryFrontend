import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./styles";

import DownloadIcon from "@mui/icons-material/Download";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";

import { fetchBooksWithExactCathegory } from "../../../actions/book";

import Slider from "../react-slider/Slider";

import { Grid, Typography, Button, Box } from "@material-ui/core";
import Chip from "@mui/material/Chip";

const ExactBookDetail = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const play = "autoplay";

  const { exactBookData } = useSelector((store) => store.books);
  const bookFromLocalS = JSON.parse(localStorage.getItem("exactBook"));
  const { darkMode } = useSelector((store) => store.auth);
  const { booksbyCategory, category, page } = useSelector(
    (store) => store.books
  );

  const exactBookFromLocalStorage = JSON.parse(
    localStorage.getItem("similarBooks")
  );
  const books = booksbyCategory ? booksbyCategory : exactBookFromLocalStorage;
  const newBook = exactBookData ? exactBookData : bookFromLocalS;

  const url = newBook.coverImage;
  const urlBase = "https://cdn.asaha.com/assets/thumbs";
  const urlSecondP = url.split("/")[url.split("/").length - 2];
  const urlLastP = url.split("/")[url.split("/").length - 1].split("-")[0];
  const newUrl = `${urlBase}/${urlSecondP}/${urlLastP}.jpg`;

  const previewLink = newBook.link;
  const previewSession = previewLink.split("/")[3].split("=")[2].split("&")[0];

  useEffect(() => {
    dispatch(fetchBooksWithExactCathegory(category, page));
  }, [category, page, dispatch]);

  return (
    <div
      className={
        darkMode
          ? `${classes.bookDetailWrapperDrkM}`
          : `${classes.bookDetailWrapper}`
      }
    >
      <Box>
        <Grid
          container
          className={
            darkMode ? `${classes.bookDetailDrkM}` : `${classes.bookDetail}`
          }
        >
          <Grid item xs={12} md={9}>
            <Grid
              container
              style={{
                border: "1px solid green",
                width: "88%",
                margin: "auto",
                boxShadow:
                  "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
              }}
            >
              <Grid
                item
                style={{
                  textAlign: "center",
                  width: "100%",
                  background: "white",
                  paddingTop: "1rem",
                }}
                md={3}
                xs={12}
              >
                <img className={classes.bookImage} src={newUrl} alt="" />
              </Grid>

              <Grid
                style={{
                  background: "white",
                  position: "relative",
                  minHeight: "333px",
                  alignItems: "center",
                }}
                item
                xs={12}
                md={9}
              >
                <div className={classes.detailContaienr}>
                  <Typography className={classes.bookTitle} variant="h4">
                    {newBook?.title}
                  </Typography>
                  <Typography className={classes.author} variant="h5">
                    <Typography className={classes.authorfirstP}>
                      Category
                    </Typography>
                    :{newBook?.category}
                  </Typography>
                  {newBook.author && (
                    <Typography className={classes.author} variant="h5">
                      <Typography className={classes.authorfirstP}>
                        Author
                      </Typography>
                      :{newBook?.author}
                    </Typography>
                  )}

                  <Typography className={classes.author} variant="h5">
                    <Typography className={classes.authorfirstP}>
                      Language
                    </Typography>
                    :English
                  </Typography>
                  <Typography className={classes.author} variant="h5">
                    <Typography className={classes.authorfirstP}>
                      Page
                    </Typography>
                    :{newBook?.pageCount}
                  </Typography>
                  <Typography className={classes.author} variant="h5">
                    <Typography className={classes.authorfirstP}>
                      PublicAt
                    </Typography>
                    :{newBook?.publishAdt}
                  </Typography>
                  <Typography className={classes.author} variant="h5">
                    <Typography className={classes.authorfirstP}>
                      Size
                    </Typography>
                    :{newBook?.fileSize}
                  </Typography>
                  <Typography className={classes.author} variant="h5">
                    <Typography className={classes.authorfirstP}>
                      Download
                    </Typography>
                    :{newBook?.downloadCount}
                  </Typography>

                  {newBook?.tags?.map((tag, index) => (
                    <Chip
                      key={index}
                      style={{
                        color: "white",
                        background: "green",
                        margin: ".2rem .2rem",
                        marginLeft: "0",
                      }}
                      className={classes.categoryTag}
                      label={tag}
                    />
                  ))}
                </div>
                <div className={classes.btnContainer}>
                  <Button className={classes.downloadBtn}>
                    <FavoriteBorderIcon />
                  </Button>
                  <a
                    href={`https://www.pdfdrive.com/ebook/preview?id=${newBook.dataId}&session=${previewSession}`}
                  >
                    <Button className={classes.downloadBtn}>
                      <VisibilityIcon />
                    </Button>
                  </a>

                  <a href={newBook.link}>
                    <Button className={classes.downloadBtn}>
                      <DownloadIcon />
                    </Button>
                  </a>
                </div>
              </Grid>
            </Grid>
            <div style={{ width: "100%" }}>
              <h1 style={{ margin: "0", marginLeft: "1rem" }}>
                You may also like!
              </h1>
              <Slider books={books} play={play} />
            </div>
          </Grid>
          <Grid
            className={classes.addiv}
            style={{ textAlign: "center" }}
            item
            md={3}
          >
            <div style={{ position: "relative", textAlign: "right" }}>
              <div>
                <CloseIcon
                  style={{ position: "absolute", right: "22px", color: "red" }}
                />
              </div>
              <img
                style={{ width: "80%", zIndex: "-1" }}
                alt=""
                src="https://www.bannersmall.com/wp-content/uploads/2018/02/port-gif300600-00012.gif"
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ExactBookDetail;
