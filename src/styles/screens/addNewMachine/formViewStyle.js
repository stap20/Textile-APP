import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default formViewStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      // backgroundColor: 'red'
      gap: convertPxToDp(46),
    },

    profileContainer:{
      // flex: 1
      height: convertPxToDp(133.32),
    },
    machineContainer:{
      flex: 1,
      gap: convertPxToDp(34.68)
    },

    profileDropDownContainer: {
      
    },

    title: {
      fontSize: convertPxToDp(35),
      fontWeight: '600',
      color: theme.colors.primary,
      marginBottom: convertPxToDp(83),
    },

    formViewContainer: {
      flex: 1,
      borderRadius: convertPxToDp(50),
      padding: convertPxToDp(45),
      backgroundColor: '#FFFFFF',
    },

    formRowContainer: {
      // flexDirection: 'row',
      justifyContent:'space-between',
      marginBottom: convertPxToDp(60),
    },

    textInputContainer: {
      flex:0, //overwrite if flex 1
      // width: convertPxToDp(407),
      marginBottom: convertPxToDp(59)
    },

    btnsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: convertPxToDp(90),
      marginTop: 'auto',
    },

    btnsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    cancelBtn: {
      justifyContent: 'center',
      height: convertPxToDp(87),
      width: convertPxToDp(214),
      marginRight: convertPxToDp(320),
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
      height: convertPxToDp(87),
      width: convertPxToDp(214),
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
