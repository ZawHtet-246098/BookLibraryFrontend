import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: ".2rem",
      paddingRight: ".2rem",
    },
  },
}));
