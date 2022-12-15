import React from "react";
import PropTypes, { array } from "prop-types";
import "./style.css";
export const Card = ({
  backgroundColor,
  color,
  shadow,
  rounded,
  height,
  width,
  ...props
}) => {
  const borderRadius = rounded ? "rounded" : "";
  const shadowClass = shadow ? `shadow--${shadow}` : `shadow--1`;
  return (
    <div
      className={["card", shadowClass, borderRadius, props?.className].join(
        " "
      )}
      style={{
        ...{
          width: width || null,
          height: height || null,
          borderRadius: rounded || 6,
          backgroundColor: backgroundColor || "white",
          color : color || "black",
          marginHorizontal: 4,
          marginVertical: 6,
        },

        ...props?.style,
      }}
    >
      <div class="cardHeader">

      </div>
      <div class="cardContent" style={{
        ...{
          backgroundColor: 'white',
          marginHorizontal: 18,
          marginVertical: 10,
        },
      }}>
        hello
        <h1>aaaaa</h1>
        {props.children}
      </div>
      <div class="cardFooter">

      </div>

    </div>
  );
};

var themesLengthShadow= [];
for (var i = 1; i <= 40; i++) {
  themesLengthShadow.push(i);
}
console.log(themesLengthShadow);
Card.propTypes = {
  color: PropTypes.string,
  /**
   * Which color is used for background
   */
  backgroundColor: PropTypes.string,
  /**
   * Which width
   */
  width: PropTypes.string,
  /**
   * Which height
   */
  height: PropTypes.string,
  /**
   * Is rounded ?
   */
  rounded: PropTypes.string,
  /**
   * Which type of shadow ?
   */
  shadow: PropTypes.oneOf(themesLengthShadow),
};

Card.defaultProps = {
  backgroundColor: null,
  rounded: false,
};
