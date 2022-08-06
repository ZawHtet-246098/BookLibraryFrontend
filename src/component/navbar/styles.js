import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appbar: {
    padding: ".2rem 1rem",
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(5px)",
    color: "green",
    width: "100vw",
  },
  appbarDrkM: {
    padding: ".2rem 1rem",
    backgroundColor: "black !important",
    borderBottom: "1px solid white",
    color: "green !important",
    width: "100vw",
  },
  appbarContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoText: {
    fontFamily: "Dancing Script",
    fontSize: "2rem",
    fontWeight: "800",
    [theme.breakpoints.up("md")]: {
      marginLeft: "2rem",
    },
  },
  navSecondPart: {
    display: "flex",
    alignItems: "center",
  },
  signinBtn: {
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: "bold",
    background: "green",
    color: "white",
    "&:hover": {
      background: "darkgreen",
    },
  },
  inputBook: {
    height: "33px",
    fontSize: "1rem",

    border: "none",
    outline: "none",
  },
  inputBookDrkM: {
    height: "34px",
    fontSize: "1rem",
    background: "black !important",
    borderColor: "green !important",
    color: "white !important",

    border: "none",
    outline: "none",
  },
  searchIcon: {
    background: "rgb(233,235,238)",
    borderRadius: "none",
  },
  searchIconDrkM: {
    background: "green",
    borderRadius: "none",
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "space-between",
    border: "2px solid green",
    borderRadius: "5px",
  },
  removeSearchbar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "auto",
    alignItems: "center",
  },
  logout: {
    marginLeft: "5px",
  },
  logoutmain: {
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  avatarForLargeDevice: {
    marginLeft: "1rem",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  avatarForSmallDevice: {
    width: "35px !important",
    height: "35px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  userName: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  userNameDrkM: {
    color: "white !important",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  singinavader: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  singinbutton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  routeBtn: {
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "none",
  },
  deviceLogoutdiv: {
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(5px)",
    width: "100px",
    height: "auto",
    position: "absolute",
    bottom: "-63px",
    right: "0",
  },
  menuBtn: {
    [theme.breakpoints.up("500")]: {
      display: "none",
    },
  },
  deviceMenu: {
    width: "300px",
    margin: "auto",
    marginTop: "1rem",
  },
}));
