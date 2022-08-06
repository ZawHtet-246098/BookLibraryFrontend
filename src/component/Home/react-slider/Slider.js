import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./style";

import { fetchExactBook } from "../../../actions/book";
import { fetchBooksWithExactCathegory } from "../../../actions/book";

import { Card, CardContent, CardMedia, ButtonBase } from "@material-ui/core";

import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const Slider = ({ books, play }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { page } = useSelector((store) => store.books);

  const handleClick = (id, category) => {
    dispatch(fetchExactBook(id));
    dispatch(fetchBooksWithExactCathegory(category, page));
    navigate(`/${id}`);
  };

  return (
    <AliceCarousel
      activeIndex={2}
      animationDuration={500}
      disableDotsControls
      autoPlay={play}
      infinite
      responsive={{
        0: {
          items: 3,
        },
        500: {
          items: 5,
        },
        1100: {
          items: 8,
        },
      }}
      mouseTracking
      items={books?.map((book, index) => (
        <ButtonBase
          component="span"
          name="test"
          onDragStart={handleDragStart}
          onClick={() => handleClick(book._id, book.category)}
        >
          <Card
            style={{
              width: "100%",
              minWidth: "116px",
              margin: "0",
              boxShadow: " rgba(0, 0, 0, 0.24) 3px 3px 8px",
            }}
            className={classes.card}
          >
            <CardMedia
              component="img"
              style={{
                width: "100%",
                height: "160px",
              }}
              image={book.coverImage}
              alt="green iguana"
            />
            <CardContent style={{ padding: ".1rem" }}>
              {`${book.pageCount}  / ${book.publishAdt} `}
            </CardContent>
          </Card>
        </ButtonBase>
      ))}
    />
  );
};

export default Slider;
