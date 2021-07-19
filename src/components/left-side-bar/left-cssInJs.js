import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  sideBar: {
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
  NavLink: {
    textDecoration: "none",
    color: "black",
    // paddingRight: "1rem",
  },
}));
