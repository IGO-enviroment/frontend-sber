import { useParams } from "react-router-dom";
import { useGetDialogById } from "../../shared/react-query/dialogs/use-get-dialog-by-id";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import makeStyles from "@mui/styles/makeStyles";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import TextField from "@mui/material/TextField";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { useGetDialogsList } from "../../shared/react-query/dialogs/use-get-dialogs-list";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

// export const DialogPage = () => {
//   const params = useParams();
//   const { data } = useGetDialogById(params.dialogsID);
//   return <></>;
// };

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: "100%",
    maxWidth: 600,
    margin: "20px",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  messageContent: {
    padding: theme.spacing(2),
  },
  avatar: {
    width: 40,
    height: 40,
  },
  itemText: {
    paddingLeft: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
  },
}));

export const DialogPage = () => {
  const classes = useStyles();

  const params = useParams();
  const { data } = useGetDialogById(params.dialogsID);
  console.log(params);
  console.log(data);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault(); // Предотвратить стандартное поведение формы
    const newDialog = {
      id: Date.now(),
      content: newMessage,
      read_at: null,
    };
    fetch("/api/sendmessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDialog),
    }).then(() => {
      // setDialog([...dialog, newDialog]);
      setNewMessage("");
    });
  };

  return (
    <div className={classes.root}>
      <List>
        {data?.messages?.map((item) => (
          <ListItem key={item.id} className={classes.listItem}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>{item.id}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.content}
              secondary={
                <Typography className={classes.itemText}>
                  Последнее сообщение прочитано:{" "}
                  {item.read_at
                    ? new Date(item.read_at).toLocaleString()
                    : "Не прочитано"}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      <form onSubmit={sendMessage}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            id="standard-name"
            label="Введите сообщение"
            className={classes.textField}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Отправить
          </Button>
        </Box>
      </form>
    </div>
  );
};
