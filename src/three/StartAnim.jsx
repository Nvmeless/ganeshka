import React, { useRef, useState } from "react";
import {ViewerContainer , CanvasContainer ,Canvas, useFrame } from "@react-three/fiber";
import { ceilPowerOfTwo } from "three/src/math/MathUtils";
import { list } from "postcss";
import { MathUtils } from "three";
import { Vector3 } from "three";

import Arrangement from "./Arrangement.jsx";

export default function StartAnim (props) {
  return (<Arrangement arrangementColor={props.animColor.arrangementColor} nWidth={10} nHeight={8} heightCard={props.heightCard} widthCard={props.widthCard} depthCard={props.depthCard} handleOnEnd={props.handleOnEnd}  maxX={1} maxY={1} fps={2} pause={10}></Arrangement>)
}