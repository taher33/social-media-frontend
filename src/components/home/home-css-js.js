import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%", //480
    marginBottom: "1rem",
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

  paper: {
    display: "flex",
    padding: "0.5rem 1rem",
    alignItems: "center",
  },
  img: {
    height: "3.5rem",
    borderRadius: "50%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: "1rem",
  },

  actionDiv: {
    display: "flex",
    marginTop: ".5rem",
    alignItems: "center",
  },

  textField: {
    marginTop: "0.5rem",
  },

  imgIcon: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
  btn: {
    fontWeight: "bold",
  },
  postingForm: {
    width: "100%",
    marginBottom: "1rem",
  },
}));
