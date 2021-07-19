import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  sideBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    marginLeft: "1rem",
  },
  root: {},
  listItme: {},
  link: {
    textDecoration: "none",
    color: "black",
  },
  title: {
    padding: "1rem",
  },
}));
