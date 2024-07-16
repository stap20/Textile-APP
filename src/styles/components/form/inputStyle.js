import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default inputStyle = theme => {
  return StyleSheet.create({
    container: {
        flex:1,
    },

    inputTitle: {
      fontSize: convertPxToDp(30),
      fontWeight: '500',
      color: theme.colors.primary,
      marginBottom: convertPxToDp(23),
    },

    input: {
      height: convertPxToDp(65),
      borderWidth: convertPxToDp(4),
      borderRadius: convertPxToDp(20),
      paddingHorizontal: convertPxToDp(20),
      borderColor: theme.borderColors.formField,

      fontSize: convertPxToDp(20),
      fontWeight: '400',
      color: theme.colors.primary,
    },

    focused:{
      borderColor: theme.borderColors.focusedFormField,
    },

  });
};
