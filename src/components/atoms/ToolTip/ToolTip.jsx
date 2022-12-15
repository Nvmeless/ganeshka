import PropTypes from "prop-types"
import React from "react";
import { css } from "styled-components";
import "./style.css";
export const ToolTip = ({
    backgroundColor,
    color,
    direction,
    fleche,
    label,
    ...props
  }) => {
    return (
        <body >
            <h2>Tooltip</h2>
             <div class = "tooltip2">aaaaaaaaaa
                <div className={["ToolTip", fleche, direction, props?.className].join(
            " "
            )}  style={{
                ...{
                    backgroundColor: backgroundColor || "red",
                    color: color || "black",
                },
                ...props?.style,
                }}>
                {label}
                </div>
             </div>
        </body>
    )

  }
//   style={style}
// function ToolTip({ label, backgroundColor = "red", direction = "droite", fleche = false }) {
//   let top = null;
//   let left = null;
//   let right = null;
//   let margin = null;
//   let bottom = null;
// // Switch direction of tooltip
//   if (direction =="droite"){
//     top = '-5px';
//     left = `105%`;
//   }
//   if (direction =="gauche"){
//     top = '-5px';
//     right = `105%`;
//   }
//   if (direction =="haut"){
//     bottom = `100%`;
//     left = `50%`
//     margin = -100;
//   }
//   if (direction =="bas"){
//     top= '100%';
//     left = `50%`;
//     margin = -100;
//   }
//   const style = {
//     backgroundColor,
//     top: `${top}`|| null,
//     left: `${left}`|| null,
//     right: `${right}`|| null,
//     bottom: `${bottom}`|| null,
//     'margin-left': `${margin}px`|| null,
//   }
//   if (fleche==true) {

//   }
//   return (
//     <body >
//         <h2>Left Tooltip</h2>
//         <p>Move the mouse over the text below:</p>
//          <div class = "tooltip2">aaaaaaaaaa
//             <div className={["ToolTip", fleche, props?.className].join(
//         " "
//         )}style={style}>
//             {label}
//             </div>
//          </div>
//     </body>
   
    
//   )
// }

ToolTip.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  direction: PropTypes.oneOf(["droite", "gauche", "haut" , "bas"]),
  fleche : PropTypes.bool,
}
export default ToolTip
// import React from "react";
// import PropTypes from "prop-types";
// import "./style.css";

// export const ToolTip = ({
//   color,
//   title,
//   backgroundColor,
//   shadow,
//   rounded,
//   height,
//   width,
//   ...props
// }) => {
//   return (
//     <a
//     data-tip="Bernard"
//     className="tooltip"
//     style={{
//         ...{
//         color: color || "black",
//         // width: width || null,
//         // height: height || null,
//         backgroundColor: backgroundColor || "white",
//         },
//         ...props?.style,
//     }}
//     >
//     {props.children}
//     </a>
//   );
// };

// ToolTip.propTypes = {
// /**
//  * Which color is used for texts
//  */
//     color: PropTypes.string,
// /**
//  * Which id of tooltip 
//  */
//     id: PropTypes.string,
// /**
//  * Title of the tooltip
//  */
//     title: PropTypes.string,
// /**
//  * Which color is used for background
//  */
//     backgroundColor: PropTypes.string,
// /**
//  * Which width
//  */
//     width: PropTypes.string,
// /**
//  * Which height
//  */
//     height: PropTypes.string,
// /**
//  * Is rounded ?
//  */
//     rounded: PropTypes.bool,
// };
// ToolTip.defaultProps = {
//     backgroundColor: null,
//     rounded: false,
//     shadow: null,
//   };
