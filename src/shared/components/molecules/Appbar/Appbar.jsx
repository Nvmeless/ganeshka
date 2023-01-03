import React, { useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import PropTypes from "prop-types";
import { AccountCircle, Diversity3, FitnessCenter } from "@mui/icons-material";
import { StyledAppbar } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useModule } from "../../../../teacher/moduleList/hooks/useModuleList";
import { useStudent } from "../../../../teacher/studentList/hooks/useStudentList";
import { useRefreshConnectedUser } from "../../../../authentication/login/hooks/useRefreshConnectedUser";

export const Appbar = ({ ...props }) => {
  let linkNav = [];

  const location = useLocation();
  const [link, setLink] = useState(location.pathname.substring(1));
  useRefreshConnectedUser();
  useStudent();
  useModule();


  const navigate = useNavigate();

  if (props.role === "professor") {
    linkNav = [
      {
        key: 1,
        value: "students",
        label: "Students",
        navigation: "teacher/student/list",
        icon: <Diversity3 />,
      },
      {
        key: 3,
        value: "modules",
        label: "Modules",
        navigation: "teacher/modules/list",
        icon: <FitnessCenter />,
      },
      {
        key: 4,
        value: "account",
        label: "Account",
        navigation: "account",
        icon: <AccountCircle />,
      },
    ];
  }

  if (props.role === "student") {
    linkNav = [
      {
        key: 2,
        value: "modules",
        label: "Modules",
        navigation: "modules",
        icon: <FitnessCenter />,
      },
      {
        key: 3,
        value: "account",
        label: "Account",
        navigation: "account",
        icon: <AccountCircle />,
      },
    ];
  }

  return (
    <StyledAppbar>
      <div className="App">Parcours Sportifs</div>
      <BottomNavigation
        {...props}
        value={link}
        onChange={(event, newLink) => {
          setLink(newLink);
        }}
      >
        {linkNav.map((x) => (
          <BottomNavigationAction
            onClick={() => navigate("/" + x.navigation)}
            {...x}
          />
        ))}
      </BottomNavigation>
    </StyledAppbar>
  );
};

Appbar.propTypes = {
  /**
   * Which nale
   */
  role: PropTypes.string,
};
