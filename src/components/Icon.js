// Icon.js
import React from 'react';
import {View, Text} from 'react-native';
import SvgIconWrapper from './SvgIconWrapper'; // Path to SvgIconWrapper
import IconWrapper from './IconWrapper';
import {iconData} from '@utils'; // Path to your icon dataset

const Icon = ({iconName, iconColor = null}) => {
  const iconInfo = iconData[iconName];

  if (!iconInfo) {
    // Handle unknown icon names gracefully
    return (
      <View>
        <Text>Unknown Icon</Text>
      </View>
    );
  }

  const {type, name, size, width, height, color, source, stroke, opacity} =
    iconInfo;

  const currentColor = iconColor != null ? iconColor : color;
  const currentStrokeColor = iconColor != null ? iconColor : stroke;

  if (type === 'svg') {
    return (
      <SvgIconWrapper
        svgSource={source}
        width={width}
        height={height}
        color={currentColor ?? 'none'}
        stroke={currentStrokeColor ?? 'none'}
        opacity={opacity ?? 1}
      />
    );
  }

  return (
    <IconWrapper type={type} name={name} size={size} color={currentColor} />
  );
};

export default Icon;
