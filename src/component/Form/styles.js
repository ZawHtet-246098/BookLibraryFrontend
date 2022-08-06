import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  registerpage: {
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    background: "url(https://wallpaperaccess.com/full/2862199.jpg)",
  },
  registerForm: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(5px)",
    padding: "2rem 2rem",
    borderRadius: "1rem",
    [theme.breakpoints.down("xs")]: {
      borderRadius: ".5rem",
      width: "90vw",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatar: {
    margin: theme.spacing(2),
    width: "50px",
    height: "50px",
    background: "darkblue",
  },
}));
