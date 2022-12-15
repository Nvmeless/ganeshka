import React from "react";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
export const List = ({ ...props }) => {

  return (
    <>
      <Card sx={{ minWidth: 300 }} style={{ padding: "15px", margin: "15px" }}>
        {Object.keys(props.typeList).map((key) => {
          return (
            <div
              key={key}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p>{props.typeList[key]}</p>
              <p>{props.displayList[key]}</p>
            </div>
          );
        })}
        <div>
          {props.action ? (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ alignSelf: "center" }}>Actions :</p>{" "}
              <div style={{ display: "flex"}}>
                {props.action}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </Card>
    </>
  );
};

List.propTypes = {
  /**
   * Which list to display
   */
  displayList: PropTypes.object,
  /**
   * Which list to display
   */
  action: PropTypes.object,
  /**
   * Which typeType is it
   */
  typeList :PropTypes.object

};

List.defaultProps = {
  displayList: {},
};
