import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default statisticsViewStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    machineSummaryContainer: {
      marginBottom: convertPxToDp(28),
    },
    chartsRowContainer: {
      height: convertPxToDp(614),
      marginBottom: convertPxToDp(28),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    chartsRowContainerSmall: {
      height: convertPxToDp(550),
      marginBottom: convertPxToDp(28),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    largeColumn: {
      width: convertPxToDp(1087),
    },
    smallColumn: {
      width: convertPxToDp(559),
    },
    column: {
      flex: 1,
      marginRight: convertPxToDp(31),
    },

    cardContainer: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: convertPxToDp(45),
      paddingVertical: convertPxToDp(36),
      borderRadius: convertPxToDp(40),
    },
    cardHeader: {
      flexDirection: 'row',
      marginBottom: convertPxToDp(20),
      borderBottomWidth: convertPxToDp(1),
      borderColor: '#3C444666',
      paddingBottom: convertPxToDp(17),
    },

    cardTitle: {
      marginRight: 10,
      color: '#3C4446',
      fontSize: convertPxToDp(32),
      fontWeight: '700',
      lineHeight: convertPxToDp(48),
    },
  });
};
