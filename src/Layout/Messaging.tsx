/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Spinner } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import chatData from "../Helper/JsonTestData/messages.json";
import Chats from "../Components/Chats";
const useStyles = createUseStyles({
  flex: {
    display: "flex",
  },
  container: {
    width: "100%",
    backgroundColor: "#1F1F1F",
    height: '100vh',
    "&::-webkit-scrollbar": {
      width: "0",
    },
    "&::-webkit-scrollbar-track": {
      display: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      display: "none",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      display: "none",
    },
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#07C586",
    color: "whitesmoke",
  },
  chatsBox: {
    width: "100%",
    height: '70%',
    display: "flex",
    flexDirection: "column",
    padding: 10,
    overflow: 'hidden',
    overflowY: 'scroll'
  },
  messageBox: {
    width: "98%",
    backgroundColor: "#F4F4F9",
    borderRadius: 40,
    height: '20%',
    margin: '10px auto'
  },
});

interface IMessagingPropTypes {
  recepient: string;
  chats: Array<any>;
}
const Messaging = (props?: IMessagingPropTypes) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  const [chats, setChats] = React.useState<Array<any>>(chatData.chats);
  return (
    <div className={classes.container}>
      {loading && <Spinner animation="border" variant="success" />}
      <div className={classes.header}>{chatData.senderName}</div>
      <div className={classes.chatsBox}>
        {chats.map((item) => {
          return <Chats {...item} />;
        })}
      </div>
      <div className={classes.messageBox}>messagebox</div>
    </div>
  );
};

export default Messaging;
