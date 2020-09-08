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
import { fetchPages } from "../../api/fetchData";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Right_bar() {
  const [pages, setPages] = useState([]);
  const getPages = async () => {
    const res = await fetchPages();
    setPages(res.pages);
  };
  useEffect(() => {
    getPages();
  }, []);
  console.log(pages);
  return (
    <div>
      <Paper>
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
                        <ListItemText primary={`${page.name}`} />
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
