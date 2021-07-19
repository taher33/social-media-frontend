import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    // padding: "1rem",
  },
  insideGrid: {
    [theme.breakpoints.between("sm", "md")]: {
      paddingLeft: "3rem",
    },
  },
}));
