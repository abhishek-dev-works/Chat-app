import React from "react";
import { IChatsStyles } from "../Helper/Chats";

const styles: IChatsStyles = {
  containerIncoming: {
    backgroundColor: "#f4f4f9" ,
    border: "1px solid transparent",
    borderRadius: 8,
    maxWidth: 600,
    fontSize: "medium",
    fontWeight: "normal",
    textAlign: "center",
    color: 'black',
    margin: 10,
    padding: 5
  },
  containerOutgoing: {
    backgroundColor: "#13f6ab",
    border: "1px solid transparent",
    borderRadius: 8,
    maxWidth: 600,
    fontSize: "medium",
    fontWeight: "normal",
    textAlign: "center",
    color: 'black',
    margin: 10,
    padding: 5,
    float:"right"
  },
  message: {
    margin: '5px 0',
    textAlign: 'center',
  },
  time: {
    float: 'right',
    fontSize: 'small'
  }
};
const Chats = () => {
  return (
    <div style={styles.containerIncoming}>
      <p style={styles.message}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quas,
        nam porro, quisquam quasi repudiandae debitis incidunt quis illo beatae
        consequatur aspernatur dolorum voluptatem? Vero delectus odit expedita
        facilis cupiditate!
      </p>
      <p style={styles.time}>12:03 pm</p>
    </div>
  );
};

export default Chats;
