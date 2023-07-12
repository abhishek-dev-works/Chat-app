import React from "react";
import { createUseStyles } from "react-jss";

interface ChatCardProps {
  sender: string;
  message: string;
  unreadCount?: string;
}

const useStyles  = createUseStyles({
  chatCard: {
    width: 480,
    padding: "10px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    border: "3px solid #058A5E",
    borderRadius: 8,
    color: "white",
    cursor: 'pointer',

    '&:hover':{
      border: "3px solid #13f6ab",
    }
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
  },
  sender: {
    textAlign: "left",
    fontWeight: "bold",
  },
  message: {
    marginTop: "5px",
    overflow: "hidden",
    whiteSpace: "nowrap" as "nowrap", // Specify the type explicitly
    textOverflow: "ellipsis",
    width: 390,
  },
  timestamp: {
    fontSize: "12px",
    color: "#777777",
    marginTop: "5px",
  },
  badge: {
    backgroundColor: "#13f6ab",
    color: "#000",
    borderRadius: "50%",
    padding: "3px 6px",
    fontSize: "12px",
    marginLeft: "auto",
  },
})

const Message = ({
  sender,
  message,
  unreadCount,
}: ChatCardProps) => {
  const classes = useStyles()
  return (
    <div className={classes.chatCard} role="button">
      <div className={classes.avatar}>{sender[0]}</div>
      <div>
        <div className={classes.sender}>{sender}</div>
        <div className={classes.message}>{message}</div>
      </div>
      {unreadCount && <div className={classes.badge}>{unreadCount}</div>}
    </div>
  );
};

export default Message;
