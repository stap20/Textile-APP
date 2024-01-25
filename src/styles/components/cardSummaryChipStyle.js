import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default cardSummaryChipStyle = theme => {
  return StyleSheet.create({
    container: {
      minWidth: convertPxToDp(116),
      marginRight: convertPxToDp(5),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: convertPxToDp(10),
      backgroundColor: theme.colors.primary + '1A',
      borderRadius: convertPxToDp(15),
    },

    detailsContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    detailsText: {
      textAlignVertical: 'center',
      textAlign: 'center',
      color: theme.colors.primary,
      fontSize: convertPxToDp(15),
      fontWeight: '600',
      opacity: 0.7,
    },
  });
};
