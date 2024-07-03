import React from "react";

import classes from "./UserList.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Card, Divider } from "@mui/material";

const UserList = (props) => {
  return (
    <Card className={classes.card}>
      <List className={classes.ul}>
        {props.users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText
              primary={user.name}
              secondary={
                <div className={classes.secondary}>{user.age} years old </div>
              }
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default UserList;
