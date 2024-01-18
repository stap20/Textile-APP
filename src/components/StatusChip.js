import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import statusChipStyle from '@styles/components/statusChipStyle';

export default function StatusChip({status}) {
  const {theme} = useTheme();
  const {state, reason} = status;

  const styles = statusChipStyle(theme, state);

  var statusText = {
    finish: 'Finsihed',
    pending: 'Pending',
    stop: 'Stopped : ' + reason,
  };
  return (
    <View style={styles.container}>
      <View style={styles.symbol} />
      <Text style={styles.statusText}>{statusText[state]}</Text>
    </View>
  );
}
