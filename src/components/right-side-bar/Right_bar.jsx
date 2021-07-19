import React, { useState, useEffect } from "react";
import { fetchUsers } from "../../api/fetchData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { server_url } from "../../constants";
//mui imports
import {
  List,
  ListItemSecondaryAction,
  Button,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  Paper,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./right-bar-css";

function Right_bar() {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  const { _id } = useSelector((state) => state.auth.user);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetchUsers();
      const Users = res.result.filter((user) => {
        return user._id !== _id;
      });

      setUsers(Users);
    };
    getUsers();
  }, [_id]);
  return (
    <Paper className={classes.sideBar}>
      <Typography variant="h5" className={classes.title}>
        people to follow
      </Typography>
      <Divider />
      <List className={classes.root}>
        {users.length === 0
          ? null
          : users.map((user, index) => {
              return (
                <div key={user._id}>
                  <Link className={classes.link} to={`/profile/${user._id}`}>
                    <ListItem className={classes.listItme} dense button>
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src={`${server_url}${user.profileImg}`}
                        />
                      </ListItemAvatar>
                      <ListItemText primary={`${user.name}`} />
                      <ListItemSecondaryAction>
                        <Button color="primary">follow</Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                    {users.length - 1 === index ? null : (
                      <Divider variant="inset" component="li" />
                    )}
                  </Link>
                </div>
              );
            })}
      </List>
    </Paper>
  );
}

export default Right_bar;
