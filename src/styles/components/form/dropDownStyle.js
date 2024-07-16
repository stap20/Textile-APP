import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default dropDownStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    dropDownSelector: {
      height: convertPxToDp(65),
      borderWidth: convertPxToDp(4),
      borderRadius: convertPxToDp(20),
      paddingRight: convertPxToDp(12),
      paddingLeft: convertPxToDp(30),
      paddingVertical: convertPxToDp(12),
      marginBottom: convertPxToDp(10),
      borderColor: theme.borderColors.formField,
    },

    dropDownContainer: {
      backgroundColor: 'white',
      borderRadius: convertPxToDp(20),
      borderWidth: convertPxToDp(4),
      paddingHorizontal: convertPxToDp(12),
      paddingVertical: convertPxToDp(16),
      borderColor: theme.borderColors.focusedFormField,
      flex: 1,
    },

    placeHolder: {
      fontSize: convertPxToDp(20),
      fontWeight: '500',
      color: theme.colors.placeHolder,
    },

    selectedText: {
      color: theme.colors.primary,
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
      fontWeight: '400',
      color: theme.colors.primary,
    },

    activeDropdownItemText: {
      fontSize: convertPxToDp(20),
      fontWeight: '400',
      color: 'white',
    },

    inputTitle: {
      fontSize: convertPxToDp(30),
      fontWeight: '500',
      color: theme.colors.primary,
      marginBottom: convertPxToDp(23),
    },
  });
};
