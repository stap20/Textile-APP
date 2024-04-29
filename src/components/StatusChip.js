import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import statusChipStyle from '@styles/components/statusChipStyle';

export default function StatusChip({
  status,
  size = 'lg',
  isUserStatus = false,
}) {
  const {theme} = useTheme();
  const {state, reason} = status;

  const styles = statusChipStyle(theme, state, size);

  var statusText = {
    finish: 'Finsihed',
    working: 'Working',
    pending: 'Pending',
    inprogress: 'In Progress',
    stop: 'Stopped : ' + reason,
    online: 'Online',
    offline: 'Offline',
  };

  const getText = state => {
    return statusText.hasOwnProperty(state) === true
      ? statusText[state]
      : status;
  };
  return (
    <View style={isUserStatus ? styles.userContainer : styles.container}>
      <View style={styles.symbol} />
      <Text style={styles.statusText}>{getText(state)}</Text>
    </View>
  );
}
