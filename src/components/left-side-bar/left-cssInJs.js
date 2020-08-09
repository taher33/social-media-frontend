import { makeStyles, fade } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  sideBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));