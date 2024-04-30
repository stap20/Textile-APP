import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default popUpModalStyle = theme => {
  return StyleSheet.create({
    container: {
      width: convertPxToDp(543),
      maxHeight: convertPxToDp(341),
      minHeight: convertPxToDp(341),
      borderRadius: convertPxToDp(32),

      alignSelf: 'center',
      backgroundColor: 'white',
    },
    iconContainer: {
      flex: 2,
      paddingTop: convertPxToDp(25),
      justifyContent: 'center',
      alignItems: 'center',
    },

    detailsContainer: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontWeight: '700',
      fontSize: convertPxToDp(25),
    },
    subTitleText: {
      fontWeight: '400',
      fontSize: convertPxToDp(19),
    },

    actionContainer: {
      flex: 2,
      flexDirection: 'row',
      gap: convertPxToDp(20),

      justifyContent: 'center',
      alignItems: 'center',
    },
    canceBtnContainer: {
      width: convertPxToDp(200),
      height: convertPxToDp(54),
      borderRadius: convertPxToDp(16),
      backgroundColor: '#FFFFFF',
      borderColor: 'rgba(60, 68, 70, 0.75)',
      borderWidth: convertPxToDp(2),
      borderRadius: convertPxToDp(16),

      justifyContent: 'center',
      alignItems: 'center',
    },
    cancelBtnText: {
      fontWeight: '600',
      fontSize: convertPxToDp(20),
      color: '#3C4446',
    },
    deleteBtnContainer: {
      flexDirection: 'row',
      gap: convertPxToDp(8),

      width: convertPxToDp(200),
      height: convertPxToDp(54),
      borderRadius: convertPxToDp(16),
      backgroundColor: 'red',

      justifyContent: 'center',
      alignItems: 'center',
    },
    deleteBtnText: {
      fontWeight: '600',
      fontSize: convertPxToDp(20),
      color: '#FFFFFF',
    },
  });
};
