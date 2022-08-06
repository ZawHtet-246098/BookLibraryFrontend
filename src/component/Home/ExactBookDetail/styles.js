import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  bookDetailWrapper: {
    width: "100vw",
    paddingTop: "4rem",
    paddingBottom: "1rem",
    background: "#F6F6F6",
    color: "green !important",
  },
  bookDetailWrapperDrkM: {
    width: "100vw",
    paddingTop: "4rem",
    paddingBottom: "1rem",
    color: "green !important",
    background: "black",
  },
  bookDetail: {
    height: "auto",
    margin: "auto",

    [theme.breakpoints.down("xs")]: {
      width: "95vw",
      margin: "auto",
      padding: ".5rem 0",
    },
  },
  bookDetailDrkM: {
    height: "auto",
    margin: "auto",
    background: "black",

    [theme.breakpoints.down("xs")]: {
      width: "95vw",
      margin: "auto",
      background: "black",
      padding: ".5rem 0",
    },
  },
  bookImage: {
    width: "200px",
    border: "1px solid green",
  },
  bookTitle: {
    fontFamily: "inherit",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  author: {
    fontFamily: "inherit",
    fontWeight: "bold",
    fontSize: "1.2rem",
    width: "300px",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  authorfirstP: {
    width: "100px",
    fontWeight: "bold",
    fontFamily: "inherit",
    fontSize: "1.2rem",
  },
  categoryTag: {
    background: "green",
    color: "white",
  },
  downloadBtn: {
    textTransform: "none",
    background: "green",
    color: "white",
    padding: ".5rem 1rem",
    marginRight: ".5rem",

    margin: ".2rem 0",
    "&:hover": {
      border: "2px solid green",
      color: "black",
    },
  },
  detailContaienr: {
    padding: "1rem 0",
    [theme.breakpoints.up("xs")]: {
      marginLeft: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: ".5rem",
    },
  },
  btnContainer: {
    textAlign: "center",
    [theme.breakpoints.up("500")]: {
      textAlign: "right",
      paddingBottom: "1rem",
      display: "flex",
      flexDirection: "column",
      width: "10px",
      position: "absolute",
      bottom: "10px",
      right: "100px",
    },
  },
  addiv: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  loveBtn: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
