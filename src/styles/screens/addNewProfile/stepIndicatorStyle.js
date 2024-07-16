import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default stepIndicatorStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },

    stepCircle: {
      justifyContent: 'center',
      alignItems: 'center',
      width: convertPxToDp(61),
      height: convertPxToDp(61),
      borderRadius: convertPxToDp(61),
      marginLeft: convertPxToDp(30),
      marginRight: convertPxToDp(30),
      backgroundColor: theme.backgroundColors.stepperStep,
    },

    activeStepCircle: {
      backgroundColor: theme.backgroundColors.stepperActiveStep,
    },

    firstStepCircle: {
      marginRight: convertPxToDp(30),
      marginLeft: 0,
    },

    lastStepCircle: {
      marginLeft: convertPxToDp(30),
      marginRight: 0,
    },

    stepText: {
      fontSize: convertPxToDp(32),
      fontWeight: '500',
      color: theme.colors.primary,
    },

    activeStepText: {
      color: 'white',
    },

    stepLine: {
      flex: 1,
      height: 15,
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
