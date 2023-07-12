import React from "react";
import chatData from "../Helper/chats.json";
import Message from "../Components/Message";
import { createUseStyles } from "react-jss";
import BrandLogo from "../assets/images/hmu-logo.png";
import { Button, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
const useStyles = createUseStyles({
  container: {
    background: "#44555f",
    height: "100vh",
    overflow: "hidden",
    overflowY: "scroll",
    margin: "0 10px",
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
  logo: {
    width: 400,
  },
  searchBar: {
    width: 410,
    outline: "none",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    height: 30,
  },
  flex: {
    display: "flex",
    margin: 10,
  },
  searchButton: {
    width: 70,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    height: 36,
    backgroundColor: "#13f6ab",
  },
});
const Inbox = () => {
  const classes = useStyles();
  const [chats, setChats] = React.useState<Array<any>>(chatData);
  const onSearch = (input: string) => {
    if (input && input !== "") {
      const results = chatData.filter(
        (item) =>
          item.message.toLowerCase().includes(input.toLowerCase()) ||
          item.sender.toLowerCase().includes(input.toLowerCase())
      );
      setChats(results);
    } else {
      setChats(chatData);
    }
  };
  return (
    <div>
      <div className={classes.container}>
        <div>
          <div>
            <img src={BrandLogo} className={classes.logo} alt="brand Logo" />
          </div>
          <div className={classes.flex}>
            <div>
              <Form.Control
                type="text"
                placeholder="Search..."
                className={classes.searchBar}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
            <div>
              <Button className={classes.searchButton}>
                <Search size={20} color="ffffff" />
              </Button>
            </div>
          </div>
        </div>
        <div>
          {chats.map((item) => {
            return (
              <div>
                <Message {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
