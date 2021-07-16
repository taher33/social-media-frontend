import React, { useState } from "react";
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
import { fetchUsers } from "../../api/fetchData";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./raight-bar.module.css";
import { useStyles } from "./right-bar-css";

function Right_bar() {
  const [pages, setPages] = useState([]);
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  const getUsers = async () => {
    const res = await fetchUsers();
    setUsers(res.result);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Paper className={classes.sideBar}>
      <Typography variant="h5">people to follow</Typography>
      <Divider />
      <List className={styles.root}>
        {users.length === 0
          ? null
          : users.map((user) => {
              return (
                <div key={user._id}>
                  <Link to={`/profile/user?id=${user._id}`}>
                    <ListItem
                      className={styles.listItme}
                      key={user._id}
                      role={undefined}
                      dense
                      button
                    >
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          // src={require("../home/img/helo.jpg")}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        style={{ overflow: "hidden" }}
                        primary={`${user.name}`}
                      />
                      <ListItemSecondaryAction>
                        <Button color="primary">follow</Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </Link>
                </div>
              );
            })}
      </List>
    </Paper>
  );
}

export default Right_bar;
