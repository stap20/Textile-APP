import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {filterButtonStyles} from '@styles/components/charts';

export default function FilterButton(props) {
  const {theme} = useTheme();
  const {symbolColor, title, isActive, onClick, isClickable} = props;

  const styles = filterButtonStyles(theme, symbolColor, isActive);

  const Wrapper = ({children, isClickable, onPress}) => {
    return isClickable ? (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {children}
      </TouchableOpacity>
    ) : (
      <View style={styles.container}>{children}</View>
    );
  };

  return (
    <Wrapper isClickable={isClickable} onPress={onClick}>
      <View style={styles.symbol} />
      <Text style={styles.title}>{title}</Text>
    </Wrapper>
  );
}
