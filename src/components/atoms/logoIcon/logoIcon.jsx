import React from "react";
import logoIcone from "../../../assets/logo-icone.svg";

export const logoIcon = (props) => {
  const contentHandler = () => {
    return props.action(props.content);
  };

  return <img src={logoIcone} alt="Home" onClick={contentHandler}></img>;
};
