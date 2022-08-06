import React, { useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import data from "./data";

import ListIcon from "@material-ui/icons/List";
import SchoolIcon from "@material-ui/icons/School";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import NoteIcon from "@material-ui/icons/Note";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import GavelIcon from "@material-ui/icons/Gavel";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import BusinessIcon from "@material-ui/icons/Business";
import PanoramaIcon from "@material-ui/icons/Panorama";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import TerminalIcon from "@mui/icons-material/Terminal";
import ChurchIcon from "@mui/icons-material/Church";
import ScienceIcon from "@mui/icons-material/Science";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ClearAllIcon from "@mui/icons-material/ClearAll";

import useStyles from "../style";

import { changeCurrentSec, startLoading } from "../../../Slices/books";
import { fetchBooksWithExactCathegory } from "../../../actions/book";
import { useDispatch, useSelector } from "react-redux";

const FilterBtns = ({ setOpen, open }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentSec, page } = useSelector((store) => store.books);

  const handleChange = async (category) => {
    dispatch(changeCurrentSec(category));
    dispatch(fetchBooksWithExactCathegory(category, page));

    open && setOpen(!open);
  };

  // useEffect(() => {
  //   dispatch(fetchBooksWithExactCathegory(currentSec, page));
  // }, [currentSec, page, dispatch]);

  return (
    <>
      {data.map((item, index) => (
        <Button
          className={
            currentSec === item.name
              ? `${classes.bookMenu} ${classes.activeBtn}`
              : classes.bookMenu
          }
          key={index}
          onClick={() => handleChange(item.name)}
        >
          {item.name === "All Books" && (
            <ClearAllIcon className={classes.icon} />
          )}
          {item.name === "Editor's Picks" && (
            <ListIcon className={classes.icon} />
          )}
          {item.name === "Academic & Education" && (
            <SchoolIcon className={classes.icon} />
          )}
          {item.name === "Biography" && (
            <MenuBookIcon className={classes.icon} />
          )}
          {item.name === "Children & Youth" && (
            <BedroomBabyIcon className={classes.icon} />
          )}
          {item.name === "Fiction & Literature" && (
            <NoteIcon className={classes.icon} />
          )}
          {item.name === "Lifestyle" && (
            <LocalLibraryIcon className={classes.icon} />
          )}
          {item.name === "Politics & Laws" && (
            <GavelIcon className={classes.icon} />
          )}
          {item.name === "Science & Research" && (
            <ScienceIcon className={classes.icon} />
          )}
          {item.name === "Art" && <ArtTrackIcon className={classes.icon} />}
          {item.name === "Business & Career" && (
            <BusinessIcon className={classes.icon} />
          )}
          {item.name === "Most Popular" && (
            <FolderSpecialIcon className={classes.icon} />
          )}
          {item.name === "Environment" && (
            <PanoramaIcon className={classes.icon} />
          )}
          {item.name === "Health & Fitness" && (
            <LocalHospitalIcon className={classes.icon} />
          )}
          {item.name === "Personal Growth" && (
            <ManageAccountsIcon className={classes.icon} />
          )}
          {item.name === "Religion" && <ChurchIcon className={classes.icon} />}
          {item.name === "Technology" && (
            <TerminalIcon className={classes.icon} />
          )}
          <Typography className={classes.filterName} key={index}>
            {item.name}
          </Typography>
        </Button>
      ))}
    </>
  );
};

export default FilterBtns;
