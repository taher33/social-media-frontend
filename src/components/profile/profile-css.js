import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "fit-content",
    position: "relative",
    marginBottom: "2rem",
    paddingBottom: "1rem",
  },
  coverImg: {
    width: "100%",
    height: "10rem",
    marginBottom: "1rem",
  },
  profileImg: {
    width: "5rem",
    height: "5rem",
    borderRadius: "50%",
    position: "absolute",
    left: ".5rem",
    top: "6rem",
  },
  namediv: {
    display: "flex",
    justifyContent: "space-around",
  },
  followBtn: {
    // marginLeft: "auto",
  },
  aboutDiv: {
    marginTop: "2vw",
    marginBottom: "2vw",
  },
  statdiv: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-around",
  },
  name: {},
});
