import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default statisticsViewStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    orderSummaryContainer: {
      marginBottom: convertPxToDp(28),
    },
    chartsRowContainer: {
      height: convertPxToDp(514),
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
  });
};
