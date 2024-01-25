// SvgIconWrapper.js
import React from 'react';
import {SvgXml} from 'react-native-svg';

export default function SvgIconWrapper({
  svgSource,
  width = 24,
  height = 24,
  color = 'none',
  stroke = 'none',
  opacity = 1,
}) {
  return (
    <SvgXml
      xml={svgSource.default}
      width={width}
      height={height}
      fill={color}
      stroke={stroke}
      opacity={opacity}
    />
  );
}
