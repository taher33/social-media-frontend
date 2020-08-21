import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "fit-content",
    position: "relative",
    marginBottom: "2px",
  },
  coverImg: {
    width: "100%",
    height: "15vw",
  },
  profileImg: {
    width: "8vw",
    height: "8vw",
    borderRadius: "50%",
    position: "absolute",
    left: "0",
    top: "11vw",
  },
  namediv: {
    display: "flex",
    marginLeft: "10vw",
    textAlign: "center",
  },
  followBtn: {
    float: "right",
    marginLeft: "50%",
  },
  aboutDiv: {
    marginTop: "2vw",
    marginBottom: "2vw",
  },
  statdiv: {
    display: "flex",
    paddingBottom: "1vw",
    paddingLeft: "2vw",
    justifyContent: "space-around",
  },
  name: {
    alignSelf: "center",
    width: "80%",
  },
});
