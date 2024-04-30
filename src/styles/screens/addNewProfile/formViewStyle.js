import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default formViewStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: convertPxToDp(50),
      padding: convertPxToDp(45),
      backgroundColor: '#FFFFFF',
    },

    title: {
      fontSize: convertPxToDp(35),
      fontWeight: '600',
      color: theme.colors.primary,
      marginBottom: convertPxToDp(83),
    },

    formRowContainer: {
      flexDirection: 'row',
      justifyContent:'space-between',
      marginBottom: convertPxToDp(60),
    },

    textInputContainer: {
      flex:0, //overwrite if flex 1
      width: convertPxToDp(407),
    },

    btnsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: convertPxToDp(90),
      marginTop: 'auto',
    },

    btnsWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    cancelBtn: {
      justifyContent: 'center',
      height: convertPxToDp(90),
      width: convertPxToDp(350),
      marginRight: convertPxToDp(124),
      borderColor: theme.colors.primary,
      borderWidth: 1,
      borderRadius: convertPxToDp(20),
    },

    cancelBtnTxt: {
      textAlign: 'center',
      fontSize: convertPxToDp(30),
      fontWeight: '600',
      color: theme.colors.primary,
    },

    saveBtn: {
      justifyContent: 'center',
      height: convertPxToDp(90),
      width: convertPxToDp(350),
      backgroundColor: theme.colors.primary,
      borderRadius: convertPxToDp(20),
    },

    saveBtnTxt: {
      textAlign: 'center',
      fontSize: convertPxToDp(30),
      fontWeight: '600',
      color: theme.colors.btnPrimary,
    },
  });
};
