import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default orderCardStyle = theme => {
  return StyleSheet.create({
    container: {
      width: convertPxToDp(539),
      height: convertPxToDp(330),
      marginBottom: convertPxToDp(30),
      paddingHorizontal: convertPxToDp(30),
      paddingTop: convertPxToDp(30),
      paddingBottom: convertPxToDp(14),
      backgroundColor: 'white',
      borderRadius: convertPxToDp(50),
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: convertPxToDp(45),
    },
    orderNumberContainer: {
      flexDirection: 'row',
    },
    title: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(25),
      fontWeight: '700',
    },
    orderNumber: {
      textAlign: 'center',
      textAlignVertical: 'center',
      color: theme.colors.primary,
      fontSize: convertPxToDp(18),
      fontWeight: '500',
    },

    details: {
      flex: 1,
      paddingTop: convertPxToDp(16),
    },
    startDateContainer: {
      flexDirection: 'row',
      marginBottom: convertPxToDp(30),
    },
    startDateTitle: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(25),
      fontWeight: '600',
    },
    startDateText: {
      textAlign: 'center',
      textAlignVertical: 'center',
      color: theme.colors.primary,
      fontSize: convertPxToDp(18),
      fontWeight: '500',
    },

    endDateContainer: {
      flexDirection: 'row',
      marginBottom: convertPxToDp(22),
    },
    endDateTitle: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(25),
      fontWeight: '600',
    },
    endDateText: {
      textAlign: 'center',
      textAlignVertical: 'center',
      color: theme.colors.primary,
      fontSize: convertPxToDp(18),
      fontWeight: '500',
    },

    orderDetailsChipContainer:{
      
    }
  });
};
