import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default stepTwoPageStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    title: {
      fontSize: convertPxToDp(35),
      fontWeight: '600',
      color: theme.colors.primary,
      marginBottom: convertPxToDp(72),
    },

    formRowContainer: {
      flexDirection: 'row',
      marginBottom: convertPxToDp(66),
    },

    feederDropDownContainer: {
      flex: 0,
      width: convertPxToDp(377),
    },

    yarnCountContainer: {
      flex: 0,
      width: convertPxToDp(253),
      marginLeft: convertPxToDp(61),
      marginRight: convertPxToDp(255),
    },

    numberOfFeederContainer: {
      flex: 0,
      width: convertPxToDp(253),
      marginRight: convertPxToDp(185),
    },

    addCrudBtn: {
      alignSelf: 'flex-end',
      justifyContent: 'center',
      height: convertPxToDp(65),
      width: convertPxToDp(200),
      marginBottom: 5,
      backgroundColor: theme.colors.primary,
      borderRadius: convertPxToDp(20),
    },

    addCrudBtnTxt: {
      textAlign: 'center',
      fontSize: convertPxToDp(30),
      fontWeight: '600',
      color: theme.colors.btnPrimary,
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

    formCrudContainer: {
      maxHeight:convertPxToDp(321),
      marginBottom: convertPxToDp(72),
      borderWidth: convertPxToDp(4),
      borderColor: theme.borderColors.formField,
      borderRadius: convertPxToDp(20),
    },

    crudRowContainer: {
      flexDirection: 'row',
      paddingVertical: convertPxToDp(20),
      paddingLeft: convertPxToDp(21),
      paddingRight: convertPxToDp(46),
      borderBottomWidth: convertPxToDp(4),
      borderBottomColor: theme.borderColors.formField,
    },

    crudFeederWrapper: {
      width: convertPxToDp(350),
    },

    crudYarnCounterWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      width: convertPxToDp(253),
      marginLeft: convertPxToDp(61),
      marginRight: convertPxToDp(255),
    },

    crudNumberFeederWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      width: convertPxToDp(253),
    },

    crudText: {
      fontSize: convertPxToDp(25),
      fontWeight: '400',
      color: theme.colors.primary,
    },

    crudDeleteBtn: {
      justifyContent:'center',
      marginLeft: 'auto',
    },
  });
};
