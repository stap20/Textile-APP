// SwitchComponent.js
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {
  switchStyle,
  switchTabStyle,
} from '@styles/components/filterSwitchStyle';

function SwitchTab(props) {
  const {title, theme, isActive, onPress} = props;
  const styles = switchTabStyle(theme, isActive);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
export default function FilterSwitchComponent(props) {
  const {theme} = useTheme();
  const {items, activeIndex, activeOnPress} = props;
  const styles = switchStyle(theme);

  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        return (
          <SwitchTab
            key={index}
            onPress={() => {
              activeOnPress(index);
            }}
            isActive={index == activeIndex}
            title={item.title}
            theme={theme}
          />
        );
      })}
    </View>
  );
}
