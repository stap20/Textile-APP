import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default orderProfileSummaryCardStyle = theme => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderRadius: convertPxToDp(40),
      paddingVertical: convertPxToDp(50),
      backgroundColor: theme.backgroundColors.cardContainer,
    },
    summaryWrapperContaienr: {
      flex: 1,
      borderRightColor: theme.backgroundColors.summarySeperator,
      borderRightWidth: 1,
    },
    summaryContainer: {
      alignSelf: 'center',
      paddingVertical: convertPxToDp(5),
    },
    title: {
      marginBottom: convertPxToDp(15),
      fontSize: convertPxToDp(20),
      fontWeight: '600',
      lineHeight: convertPxToDp(48),
      color: theme.colors.primary,
    },
    iconDataContainer: {
      flexDirection: 'row',
      marginBottom: convertPxToDp(15),
    },
    iconDetails: {
      marginLeft: convertPxToDp(15),
      fontSize: convertPxToDp(22),
      fontWeight: '700',
      lineHeight: convertPxToDp(48),
      color: theme.colors.primary,
    },
  });
};
