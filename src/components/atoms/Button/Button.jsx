import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./styles.css"

import {FaBookOpen} from "react-icons/all";
import {Puff} from "react-loading-icons";

const DEFAULT_DISABLED_STATE = false
const DEFAULT_OUTLINED_STATE = false
const DEFAULT_TEXTUAL_STATE = false
const DEFAULT_LINK_STATE = false
const DEFAULT_CONTAINED_STATE = false
const DEFAULT_UPLOAD_STATE = false
const DEFAULT_LOADING_STATE = false

const DEFAULT_TEXT_COLOR = "#FFFFFF";
const DEFAULT_BACKGROUND_COLOR = "#1E88E5";
const DEFAULT_VALUE = "My Classic Button"

const RGX_CHECK_RGBA = /^(rgba\()+([0-9, ]{1,13})+([0-9, ]{0,3})+(\))$/
const RGX_CHECK_HSLA = /^(hsla\()+([0-9%, ]{1,16})+([0-9, ]{0,3})+(\))$/
const RGX_CHECK_HEXA = /^(#)+([a-fA-F0-9]{8})$/

function rgbaToHex(color, forceRemoveAlpha = false) {
  return "#" + color.replace(/^rgba?\(|\s+|\)$/g, '')
    .split(',')
    .filter((string, index) => !forceRemoveAlpha || index !== 3)
    .map(string => parseFloat(string))
    .map((number, index) => index === 3 ? Math.round(number * 255) : number)
    .map(number => number.toString(16))
    .map(string => string.length === 1 ? "0" + string : string)
    .join("")
}

function alwaysConvertToHex(color) {
  if (RGX_CHECK_RGBA.test(color)) color = rgbaToHex(color)
  if (RGX_CHECK_HSLA.test(color)) color = "#000000"

  if (RGX_CHECK_HEXA.test(color)) return color.substring(0, 7)
  else return color
}

function shadeColor(color, percent) {

  let R = parseInt(color.substring(1,3),16);
  let G = parseInt(color.substring(3,5),16);
  let B = parseInt(color.substring(5,7),16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R<255)?R:255;
  G = (G<255)?G:255;
  B = (B<255)?B:255;

  let RR = ((R.toString(16).length===1)?"0"+R.toString(16):R.toString(16));
  let GG = ((G.toString(16).length===1)?"0"+G.toString(16):G.toString(16));
  let BB = ((B.toString(16).length===1)?"0"+B.toString(16):B.toString(16));

  return "#"+RR+GG+BB;
}

export const Button = ({disabled, outlined, link, linkObject, contained, textual, size, upload, uploadType, loading, textColor, backgroundColor, startIcon, endIcon, value, ...props}) => {
  const inputRef = useRef();

  textColor = alwaysConvertToHex(textColor)

  const pickedColor = {
    "--bs-btn-color": textColor,
    "--bs-btn-bg": backgroundColor,
    "--bs-btn-border-color": backgroundColor,
    "--bs-btn-hover-color": textColor,
    "--bs-btn-hover-bg": shadeColor(backgroundColor, -30),
    "--bs-btn-hover-border-color": shadeColor(backgroundColor, -40),
    "--bs-btn-active-color": "#fff",
    "--bs-btn-active-bg": shadeColor(backgroundColor, -40),
    "--bs-btn-active-border-color": shadeColor(backgroundColor, -50),
    "--bs-btn-active-shadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
    "--bs-btn-disabled-color": "#fff",
    "--bs-btn-disabled-bg": backgroundColor,
    "--bs-btn-disabled-border-color": backgroundColor
  }

  if (outlined) {
    pickedColor["--bs-btn-bg"] = null
    pickedColor["--bs-btn-border-color"] = textColor
    pickedColor["--bs-btn-hover-bg"] = textColor
    pickedColor["--bs-btn-hover-border-color"] = textColor
    pickedColor["--bs-btn-hover-color"] = "#FFFFFF"
    pickedColor["--bs-btn-disabled-color"] = textColor
    pickedColor["--bs-btn-disabled-bg"] = "#FFFFFF";
    pickedColor["--bs-btn-disabled-border-color"] = textColor;
  }

  if (textual) {
    pickedColor["--bs-btn-bg"] = null
    pickedColor["--bs-btn-border-color"] = null
    pickedColor["--bs-btn-border-color"] = "unset"
    pickedColor["--bs-btn-hover-bg"] = textColor + "1A"
    pickedColor["--bs-btn-hover-border-color"] = textColor + "1A"
    pickedColor["--bs-btn-hover-color"] = textColor
  }

  const classList = [
      "btn",
      disabled ? "disabled" : "",
      contained ? "btn-contained" : "",
      size,
      loading ? "btn-loading" : ""
    ].join(" ")

  const styleList = {
    ...pickedColor,
    ...{

    },
    ...props?.style
  }

  if (upload) {
    props.handleClick = () => {
      inputRef.current.click()
    }
  }

  return (
    link ?
      <a className={classList}
         style={styleList}
         href={linkObject}
         onClick={props.handleClick}>
        { loading ? (<Puff stroke="rgba(0, 0, 0, 0.12)" height="20px" width="20px" />) : ""}
        { (startIcon) }&nbsp;

        { value }

        &nbsp;{ (endIcon) }
      </a>
      :
      <button className={classList}
              style={styleList}
              onClick={props.handleClick}>
        { loading ? (<Puff stroke="rgba(0, 0, 0, 0.12)" height="20px" width="20px" />) : ""}&nbsp;
        { (startIcon) }&nbsp;

        { value }
        { upload ? (<input hidden ref={inputRef} accept={uploadType} multiple type="file" />) : ""}

        &nbsp;{ (endIcon) }
      </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  link: PropTypes.bool,
  linkObject: PropTypes.string,
  contained: PropTypes.string,
  textual: PropTypes.bool,
  size: PropTypes.string,
  upload: PropTypes.bool,
  uploadType: PropTypes.string,
  loading: PropTypes.bool,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  startIcon: PropTypes.any,
  endIcon: PropTypes.any,
  value: PropTypes.string
}

Button.defaultProps = {
  disabled: DEFAULT_DISABLED_STATE,
  outlined : DEFAULT_OUTLINED_STATE,
  link: DEFAULT_LINK_STATE,
  linkObject: "#",
  contained: DEFAULT_CONTAINED_STATE,
  textual: DEFAULT_TEXTUAL_STATE,
  size: "",
  upload: DEFAULT_UPLOAD_STATE,
  uploadType: "*",
  loading: DEFAULT_LOADING_STATE,
  textColor: DEFAULT_TEXT_COLOR,
  backgroundColor: DEFAULT_BACKGROUND_COLOR,
  startIcon: <FaBookOpen />,
  value: DEFAULT_VALUE
}
