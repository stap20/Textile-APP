import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default statusChipStyle = (theme, state, size) => {
  var color = '';
  if (state == 'finish' || state == 'working') {
    color = theme.colors.finsishedStatus;
  } else if (state == 'inprogress') {
    color = theme.colors.inprogressStatus;
  } else if (state == 'pending') {
    color = theme.colors.pendingStatus;
  } else if (state == 'stop') {
    color = theme.colors.stoppedStatus;
  } else if (state == 'online') {
    color = theme.colors.onlineStatus;
  } else if (state == 'offline') {
    color = theme.colors.offlineStatus;
  } else {
    color = theme.colors.primary;
  }

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      padding: convertPxToDp(12),
      backgroundColor: color + '33',
      borderRadius: convertPxToDp(15),
    },

    userContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: convertPxToDp(20),
      paddingVertical:convertPxToDp(14),
      backgroundColor: color + '33',
      borderRadius: convertPxToDp(15),
    },

    symbol: {
      width: convertPxToDp(size === 'md' ? 13 : 15),
      height: convertPxToDp(size === 'md' ? 13 : 15),
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
