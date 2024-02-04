import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default machineCardStyle = theme => {
  return StyleSheet.create({
    container: {
      width: convertPxToDp(539),
      height: convertPxToDp(330),
      marginBottom: convertPxToDp(30),
      paddingHorizontal:convertPxToDp(30),
      paddingTop:convertPxToDp(30),
      paddingBottom:convertPxToDp(14),
      backgroundColor: 'white',
      borderRadius: convertPxToDp(50),
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: convertPxToDp(45),
    },
    title: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(25),
      fontWeight: '700',
    },

    details: {
      flex: 1,
      paddingTop: convertPxToDp(16),
    },
    detailsRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    detailsTitle: {
      textAlign: 'center',
      color: theme.colors.primary,
      fontSize: convertPxToDp(25),
      fontWeight: '600',
    },
    detailsText: {
      textAlign: 'center',
      textAlignVertical: 'center',
      color: theme.colors.primary,
      fontSize: convertPxToDp(20),
      fontWeight: '500',
    },


    orderSummaryChipContainer: {
      flexDirection: 'row',
      height: convertPxToDp(45),
      marginBottom: convertPxToDp(15),
      marginTop:convertPxToDp(15),
    },

    footer: {
      flex: 1,
      flexDirection: 'row',
    },
    progressContainer: {
      flex: 1,
    },
    progressTitleContainer: {
      marginBottom: convertPxToDp(8),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    progressText: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(20),
      fontWeight: '600',
    },

    viewBtn: {
      justifyContent: 'center',
      alignItems: 'center',
      width: convertPxToDp(141),
      marginLeft: convertPxToDp(67),
      borderRadius: convertPxToDp(10),
      backgroundColor: theme.colors.primary,
    },
    viewBtnText: {
      color: theme.colors.btnPrimary,
      fontSize: convertPxToDp(16),
      fontWeight: '600',
    },
  });
};
