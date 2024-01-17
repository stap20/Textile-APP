import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {filterButtonStyles} from '@styles/components/charts';

export default function FilterButton(props) {
  const {theme} = useTheme();
  const {symbolColor, title, isActive, onClick} = props;
  
  const styles = filterButtonStyles(theme, symbolColor, isActive);

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <View style={styles.symbol} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
