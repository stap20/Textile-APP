import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import sidebarTabStyle from '@styles/components/sidebarTabStyle';

export default function SidebarTab(props) {
  const {theme} = useTheme();
  const {name, icon, isActive, onPress} = props;
  const styles = sidebarTabStyle(theme, isActive);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={icon} style={styles.icon} />
    </TouchableOpacity>
  );
}