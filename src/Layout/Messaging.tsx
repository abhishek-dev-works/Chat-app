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
    height: "100vh",
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
    height: "70%",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    overflow: "hidden",
    overflowY: "scroll",
  },
  messageBox: {
    width: "98%",
    backgroundColor: "#F4F4F9",
    borderRadius: 40,
    height: "20%",
    margin: "10px auto",
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
  const [message, setMessage] = React.useState<string>("");
  const lastMessageRef = React.useRef<any>(null);
  React.useEffect(()=> {
    if(lastMessageRef.current){
      lastMessageRef.current.scrollIntoView({behaviour: 'smooth'})
    }
  },[chats])
  const sendMessage = () => {
    const newMessage = {
      message,
      direction: "outgoing",
      sentDate: new Date(),
      readStatus: false,
    };
    const newChats = [...chats, newMessage];
    setChats(newChats);
  };
  return (
    <div className={classes.container}>
      {loading && <Spinner animation="border" variant="success" />}
      <div className={classes.header}>{chatData.senderName}</div>
      <div className={classes.chatsBox}>
        {chats.map((item, index) => {
          return (
            <div ref={index === chats.length - 1 ? lastMessageRef : undefined}>
              <Chats {...item} />
            </div>
          );
        })}
      </div>
      <div className={classes.messageBox}>
        messagebox
        <div>
          <input
            type="text"
            alt="type message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
