import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default datePickerStyle = theme => {
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

    dateText: {
      color: theme.colors.primary,
    },

    calendarText: {
      fontSize: convertPxToDp(18),
      fontWeight: '500',
      color: theme.colors.calendarText,
    },

    calendarSelectedText: {
      fontSize: convertPxToDp(18),
      fontWeight: '600',
      color: theme.colors.calendarSelectedText,
    },

    calendarSelectedContainer: {
      width:convertPxToDp(38),
      height:convertPxToDp(34),
      borderRadius: convertPxToDp(12),
    },

    calendarSelectedItemColor: theme.colors.primary,

    datePickerHeight: convertPxToDp(308),

    datePickerContainer: {
      justifyContent: 'center',
      position: 'absolute',
      top: convertPxToDp(134),
      zIndex: 1,
    },

    datePicker: {
      backgroundColor: 'white',
      borderRadius: convertPxToDp(20),
      borderWidth: convertPxToDp(4),
      paddingHorizontal: convertPxToDp(20),
      paddingBottom: convertPxToDp(40),
      borderColor: theme.borderColors.focusedFormField,
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
