import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  homeWrapper: {
    paddingTop: "4rem",
  },
  homeWrapperDrkM: {
    color: "white !important",
    paddingTop: "3.5rem",
  },
  filterName: {
    fontSize: "1rem",
    marginLeft: ".5rem",
  },
  bookMenu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    marginBottom: ".5rem",
    textTransform: "none",
    width: "100%",
    textAlign: "left",
    color: "green",
    padding: ".2rem",
    [theme.breakpoints.up(600)]: {
      marginLeft: ".5rem",
    },
  },
  icon: {},
  activeBtn: {
    background: "green",
    color: "white",
    "&.icon": {
      color: "white",
    },
    "&:hover": {
      color: "green",
      border: "1px solid green",
    },
  },
  previewBookWrapper: {
    background: "#F0F2F5",
  },
  previewBookWrapperDrkM: {
    background: "black",
    color: "green",
  },
  showInDevice: {
    width: "90%",
    marginTop: ".5rem",
    [theme.breakpoints.up(600)]: {
      display: "none",
    },
    [theme.breakpoints.down(600)]: {
      marginLeft: "1rem",
    },
  },
  btnContainer: {
    height: "100vh",
    position: "sticky",
    top: "0",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  btnContainerDrkM: {
    height: "100vh",
    position: "sticky",
    top: "0",
    background: "black",
    color: "white !important",
    borderRight: "2px solid white",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  exactBookbyCategoryGrid: {
    width: "80vw",
    margin: "auto",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  exactBooktitle: {
    margin: "0",
    padding: "0",
    marginLeft: "1rem",
    [theme.breakpoints.up(500)]: {
      marginLeft: "2rem",
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "1.2rem",
    },
  },
  paginationDrkM: {
    background: "white !important",
  },
}));
