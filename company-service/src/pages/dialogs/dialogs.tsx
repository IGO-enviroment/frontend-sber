import React, { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import makeStyles from '@mui/styles/makeStyles';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { useGetDialogsList } from "../../shared/react-query/dialogs/use-get-dialogs-list";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme: any) => ({
  list: {
    width: "100%",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5),
  },
  avatar: {
    width: 40,
    height: 40,
  },
  itemText: {
    paddingLeft: theme.spacing(1.5),
  },
}));

export const ChatListPage = () => {
  const classes = useStyles();

  const navigate = useNavigate()

  const {data} = useGetDialogsList()

  return (
    <div>
      <List className={classes.list}>
        {data?.map((chat) => (
          <ListItem key={chat.id} className={classes.listItem}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>{chat.id}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={chat.name}
              secondary={
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <Typography variant="body1">{chat.last_message.text}</Typography>
                  <Button  onClick={() => navigate(`/dialogs/${chat.id}`)} >
                    Перейти к диалогу
                  </Button>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
