import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default dropDownStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    selectorBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: convertPxToDp(65),
      borderWidth: convertPxToDp(4),
      borderRadius: convertPxToDp(20),
      paddingRight: convertPxToDp(12),
      paddingLeft: convertPxToDp(30),
      paddingVertical: convertPxToDp(12),
      marginBottom: convertPxToDp(10),
      borderColor: theme.borderColors.formField,
    },

    placeHolder: {
      fontSize: convertPxToDp(20),
      fontWeight: '500',
      color: theme.colors.placeHolder,
    },

    selectedText: {
      color: theme.colors.primary,
    },

    dropDownContainer: {
      width: '100%',
      justifyContent: 'center',
      position: 'absolute',
      top: convertPxToDp(134),
      zIndex: 1,
      
    },

    dropDownWrapper: {
      backgroundColor: 'white',
      borderRadius: convertPxToDp(20),
      borderWidth: convertPxToDp(4),
      paddingHorizontal: convertPxToDp(12),
      paddingVertical: convertPxToDp(16),
      borderColor: theme.borderColors.focusedFormField,
      flex: 1,
    },

    dropdownItem: {
      paddingVertical: convertPxToDp(10),
      paddingHorizontal: convertPxToDp(13),
      borderRadius: convertPxToDp(15),
    },

    activeDropdownItem: {
      backgroundColor: theme.backgroundColors.dropDownSelectedItem,
    },

    dropdownItemText: {
      fontSize: convertPxToDp(20),
      fontWeight: '500',
      color: theme.colors.primary,
    },

    activeDropdownItemText: {
      fontSize: convertPxToDp(20),
      fontWeight: '500',
      color: 'white',
    },

    inputTitle: {
      fontSize: convertPxToDp(30),
      fontWeight: '500',
      color: theme.colors.primary,
      marginBottom: convertPxToDp(23),
    },

    focused: {
      borderColor: theme.borderColors.focusedFormField,
    },
  });
};
