import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default statusChipStyle = (theme, state) => {
  var color = '';
  if (state == 'finish') {
    color = theme.colors.finsishedStatus;
  } else if (state == 'pending') {
    color = theme.colors.pendingStatus;
  } else if (state == 'stop') {
    color = theme.colors.stoppedStatus;
  } else {
    color = theme.colors.primary;
  }

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: convertPxToDp(12),
      backgroundColor: color + '33',
      borderRadius: convertPxToDp(15),
    },

    symbol: {
      width: convertPxToDp(15),
      height: convertPxToDp(15),
      borderRadius: convertPxToDp(30),
      backgroundColor: color,
    },

    statusText: {
      textAlignVertical: 'center',
      textAlign: 'center',
      marginLeft: convertPxToDp(12),
      color: color,
      fontSize: convertPxToDp(16),
      fontWeight: '600',
    },
  });
};
