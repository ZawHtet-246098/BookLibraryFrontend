import React, { useState } from "react";
import useStyles from "./styles";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import AutoComplete from "../Home/AutoComplete/AutoComplete";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchFindBook } from "../../actions/book";
import { deleteSearchValue } from "../../Slices/books";

const SearchBar = ({ width }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { darkMode } = useSelector((store) => store.auth);
  const [value, setValue] = useState("");

  const { allBooksName, searchValue } = useSelector((store) => store.books);

  const handleClick = () => {
    dispatch(fetchFindBook(searchValue, navigate));
    dispatch(deleteSearchValue());
    setValue("");
  };

  const classes = useStyles();
  return (
    <div className={classes.btnWrapper}>
      <AutoComplete
        style={{ width: `${width}` }}
        options={allBooksName}
        value={value}
        setValue={setValue}
      />
      <Button
        // className={classes.searchIcon}
        onClick={handleClick}
        className={
          darkMode ? `${classes.searchIconDrkM}` : `${classes.searchIcon}`
        }
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchBar;
