import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  Container,
  AppBar,
  Avatar,
  Button,
  IconButton,
} from "@material-ui/core";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchBar from "./SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import FilterBtns from "../Home/FilterBtns/FilterBtns";

import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { logOut, openModel, changeDarkMode } from "../../Slices/authorization";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { user, authData, darkMode } = useSelector((store) => store.auth);
  const [open, setOpen] = useState(false);

  const creactCommonUser = user ? user : authData;

  const handleClick = () => {
    dispatch(openModel());
  };
  const closeHandleClick = () => {};

  const handleChangeDarkMode = () => {
    dispatch(changeDarkMode());
  };

  const handleChangeClick = () => {
    navigate("/");
  };

  const handleClickaway = () => {
    setOpen(!open);
  };

  const logout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <AppBar
      className={darkMode ? `${classes.appbarDrkM}` : `${classes.appbar}`}
      position="absolute"
    >
      <Container disableGutters className={classes.appbarContainer}>
        <div className={classes.navFirstPart}>
          <Typography onClick={handleChangeClick} className={classes.logoText}>
            Library
          </Typography>
        </div>
        <div className={classes.navSecondPart}>
          <div className={classes.removeSearchbar}>
            <SearchBar width={"300px"} />
          </div>

          <div>
            {creactCommonUser ? (
              <div className={classes.profile}>
                <Avatar
                  alt={creactCommonUser?.result.name}
                  src={creactCommonUser?.result.imageUrl}
                  className={classes.avatarForLargeDevice}
                >
                  {creactCommonUser?.result.name.charAt(0)}
                </Avatar>
                <div>
                  <Avatar
                    alt={creactCommonUser?.result.name}
                    src={creactCommonUser?.result.imageUrl}
                    className={classes.avatarForSmallDevice}
                    onClick={() => closeHandleClick}
                  >
                    {creactCommonUser?.result.name.charAt(0)}
                  </Avatar>
                </div>

                <Typography
                  className={
                    darkMode ? `${classes.userNameDrkM}` : `${classes.userName}`
                  }
                  style={{
                    color: "black",
                    fontFamily: "inherit",
                    marginLeft: ".5rem",
                  }}
                  variant="h6"
                >
                  {creactCommonUser?.result.name}
                </Typography>
                <Button
                  className={`${classes.logout} ${classes.logoutmain}`}
                  style={{ textTransform: "none", background: "green" }}
                  variant="contained"
                  color="secondary"
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login" className={classes.brandContainer}>
                  <AccountCircleIcon
                    className={classes.singinavader}
                    style={{ marginTop: "5px" }}
                  />
                </Link>

                <span className={classes.singinbutton}>
                  <Button
                    component={Link}
                    to="/login"
                    variant="outlined"
                    style={{
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      background: "green",
                      color: "white",
                      marginLeft: "1rem",
                    }}
                    onClick={handleClick}
                  >
                    SignIn
                  </Button>
                </span>
              </>
            )}
          </div>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClickaway}
            className={classes.menuBtn}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => handleChangeDarkMode()}
            color={darkMode ? "inherit" : "inherit"}
            style={{ marginLeft: ".5rem" }}
          >
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </div>
      </Container>
      {open ? (
        <div className={classes.deviceMenu}>
          <Typography
            style={{
              color: "green",
              fontFamily: "inherit",
              marginBottom: "0",
            }}
            variant="h6"
            paragraph
          >
            {creactCommonUser?.result.name}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <div>
              <Typography>{creactCommonUser?.result.email}</Typography>
            </div>
            {creactCommonUser && (
              <Button
                component={Link}
                to="/"
                className={classes.logout}
                style={{
                  textTransform: "none",
                  background: "darkred",
                }}
                variant="contained"
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            )}
          </div>
          <FilterBtns
            setOpen={setOpen}
            open={open}
            style={{ marginTop: "1rem !important" }}
          />
        </div>
      ) : null}
    </AppBar>
  );
};

export default Navbar;
