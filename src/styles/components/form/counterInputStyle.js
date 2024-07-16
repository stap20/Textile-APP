import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default counterInputStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    inputTitle: {
      fontSize: convertPxToDp(30),
      fontWeight: '500',
      color: theme.colors.primary,
      marginBottom: convertPxToDp(23),
    },

    counterContainer: {
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      height: convertPxToDp(65),
      borderWidth: convertPxToDp(4),
      borderRadius: convertPxToDp(20),
      borderColor: theme.borderColors.formField,
      paddingHorizontal: convertPxToDp(10),
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    input: {
      textAlign:'center',
      fontSize: convertPxToDp(25),
      fontWeight: '400',
      color: '#757D8A',
    },

    focused: {
      borderColor: theme.borderColors.focusedFormField,
    },

    btnContainer: {
      backgroundColor: theme.borderColors.formField,
      width: convertPxToDp(38.33),
      height: convertPxToDp(38.47),
      borderRadius: convertPxToDp(10),
      justifyContent: 'center',
      alignItems: 'center',
    },

    btnText:{
      textAlign:'center',
      fontSize: convertPxToDp(20),
      fontWeight: '900',
    }
  });
};
