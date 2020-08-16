import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%", //480
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {},
  uperDiv: {
    display: "flex",
    width: "99%",
    paddingTop: "2%",
    paddingBottom: "2%",
  },
  form: {
    width: "80%",
  },

  textField: {
    width: "100%",
    margin: "3%",
    padding: "1%",
  },
  img: {
    height: "50px",
    borderRadius: "50%",
    marginLeft: "10px",
    marginTop: "10px",
  },

  actionDiv: {
    display: "flex",
    justifyContent: "space-around",
  },
  imgIcon: {
    margin: "auto",
  },
  btn: {},
}));
