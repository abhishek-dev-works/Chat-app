import React from "react";
import { createUseStyles } from "react-jss";
import logo from "../assets/images/hmu-logo-icon.png";
import { PeopleFill, PersonCircle } from "react-bootstrap-icons";

const useStyles = createUseStyles({
  container: {
    width: 40,
    height: "100vh",
    backgroundColor: "#1F1F1F",
    padding: "0 10px",
  },
  fullWidth: {
    width: "100%",
    margin: "20px 0",
  },
  logo: {
    width: 40,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
});

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.fullWidth}>
        <img src={logo} alt="HMU logo" className={classes.logo} />
      </div>
      <div className={classes.fullWidth}>
        <PeopleFill color="#13F6AB" size={23} />
      </div>
      <div className={classes.fullWidth}>
        <PersonCircle color="#13F6AB" size={23} />
      </div>
    </div>
  );
};

export default SideBar;
