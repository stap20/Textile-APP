import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default formViewStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: convertPxToDp(50),
      backgroundColor: '#FFFFFF',
    },

    stepperContainter: {
      height: convertPxToDp(165),
      paddingHorizontal: convertPxToDp(43),
      paddingTop: convertPxToDp(50),
      paddingBottom: convertPxToDp(53),
      borderBottomWidth: convertPxToDp(3),
      borderBottomColor: theme.borderColors.stepperSeperator,
    },

    formContainer: {
      flex: 1,
      padding: convertPxToDp(45),
    },
  });
};
