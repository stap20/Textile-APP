import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import sidebarTabStyle from '@styles/components/sidebarTabStyle';
import Icon from './Icon';

export default function SidebarTabComponent(props) {
  const {theme} = useTheme();
  const {name, icon, isActive, onPress} = props;
  const styles = sidebarTabStyle(theme, isActive);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={isActive == true ? styles.container_active : styles.container}>
      {/* <Icon name={icon} style={styles.icon} /> */}

      <Icon iconName={icon} />
    </TouchableOpacity>
  );
}
