import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default statusChipStyle = (theme, state, size) => {
  const stateColors = {
    'finish': theme.colors.finsishedStatus,
    'working': theme.colors.finsishedStatus,
    'inprogress': theme.colors.inprogressStatus,
    'pending': theme.colors.pendingStatus,
    'stop': theme.colors.stoppedStatus,
    'online': theme.colors.onlineStatus,
    'offline': theme.colors.offlineStatus,
    'active': theme.colors.activeStatus,
    'inActive': theme.colors.inActiveStatus,
  };
  
  const color = stateColors[state] || theme.colors.primary;
  

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
      paddingVertical: convertPxToDp(14),
      backgroundColor: color + '33',
      borderRadius: convertPxToDp(15),
    },

    profileContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: convertPxToDp(20),
      paddingVertical: convertPxToDp(14),
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
