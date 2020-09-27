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
import styles from "./raight-bar.module.css";
import { fetchPages, fetchUsers } from "../../api/fetchData";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Right_bar() {
  const [pages, setPages] = useState([]);
  const [users, setUsers] = useState([]);
  const getPages = async () => {
    const res = await fetchPages();
    setPages(res.pages);
  };
  const getUsers = async () => {
    const res = await fetchUsers();
    setUsers(res.result);
  };
  useEffect(() => {
    getPages();
    getUsers();
  }, []);
  return (
    <div>
      <Paper style={{ marginBottom: "2rem" }}>
        <Typography variant="h5">pages to follow</Typography>
        <Divider />
        <List className={styles.root}>
          {pages.length === 0
            ? null
            : pages.map(page => {
                return (
                  <>
                    <Link to={`/profile/page?id=${page.id}`}>
                      <ListItem
                        className={styles.listItme}
                        key={page._id}
                        role={undefined}
                        dense
                        button
                      >
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src={require("../home/img/helo.jpg")}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          style={{ overflow: "hidden" }}
                          primary={`${page.name}`}
                        />
                        <ListItemSecondaryAction>
                          <Button color="primary">follow</Button>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </Link>
                  </>
                );
              })}
        </List>
      </Paper>
      <Paper>
        <Typography variant="h5">people to follow</Typography>
        <Divider />
        <List className={styles.root}>
          {users.length === 0
            ? null
            : users.map(user => {
                return (
                  <>
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
                            src={require("../home/img/helo.jpg")}
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
                  </>
                );
              })}
        </List>
      </Paper>
    </div>
  );
}

export default Right_bar;
