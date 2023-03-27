import "./bottomNavBar.css";

import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import icone_logo from "../../../assets/logo-icone.svg";
import icone_parametres from "./icons/icone_parametres.svg";
import icone_compte from "./icons/icone_compte.svg";

export const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <BottomNavigation
        sx={{ bgcolor: "#00000000" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(value);
        }}
        // className="bottomNav"
      >
        <BottomNavigationAction
          label=""
          href={`parametres`}
          icon={<img src={icone_parametres} alt="Panier" />}
        />
        <BottomNavigationAction
          label=""
          href={`/`}
          icon={<img src={icone_logo} alt="Home" />}
        />
        <BottomNavigationAction
          label=""
          href={`compte`}
          icon={
            <img
              //   className={
              //     window.location.pathname === "/compte"
              //       ? "icone-menu active"
              //       : "icone-menu"
              //   }
              src={icone_compte}
              alt="Compte"
            />
          }
        />
      </BottomNavigation>
    </>
  );
};
