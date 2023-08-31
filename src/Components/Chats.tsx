import React from "react";
import { IChatsStyles } from "../Helper/Chats";

const styles: IChatsStyles = {
  containerIncoming: {
    backgroundColor: "#f4f4f9",
    border: "1px solid transparent",
    borderRadius: 8,
    maxWidth: 600,
    fontSize: "medium",
    fontWeight: "normal",
    textAlign: "left",
    color: "black",
    margin: 10,
    padding: 5,
    alignSelf: "flex-start"
  },
  containerOutgoing: {
    backgroundColor: "#13f6ab",
    border: "1px solid transparent",
    borderRadius: 8,
    maxWidth: 600,
    fontSize: "medium",
    fontWeight: "normal",
    textAlign: "left",
    color: "black",
    margin: 10,
    padding: 5,
    alignSelf: 'flex-end'
  },
  message: {
    margin: "5px 0",
    textAlign: "left",
  },
  time: {
    float: "right",
    fontSize: "small",
  },
};

export interface IChatsProps {
  direction: "incoming" | "outgoing";
  message: string;
  sentDate: string;
}
const Chats = (props: IChatsProps) => {
  return (
    <div
      style={
        props.direction === "incoming"
          ? styles.containerIncoming
          : styles.containerOutgoing
      }
    >
      <p style={styles.message}>{props.message}</p>
      <p style={styles.time}>{props.sentDate}</p>
    </div>
  );
};

export default Chats;
