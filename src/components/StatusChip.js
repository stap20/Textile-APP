import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import statusChipStyle from '@styles/components/statusChipStyle';

export default function StatusChip({
  status,
  size = 'lg',
  statusType = 'default',
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
    active: 'Active',
    inActive: 'Inactive',
  };

  const getText = state => {
    return statusText.hasOwnProperty(state) === true
      ? statusText[state]
      : status;
  };

  const containerStyles = {
    default: styles.container,
    user: styles.userContainer,
    profile: styles.profileContainer,
  };

  return (
    <View style={containerStyles[statusType]}>
      <View style={styles.symbol} />
      <Text style={styles.statusText}>{getText(state)}</Text>
    </View>
  );
}
