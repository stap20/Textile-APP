import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default choicesStyle = theme => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: convertPxToDp(20),
      borderWidth: convertPxToDp(3),
      borderColor: '#EBECEC',
      padding: convertPxToDp(10),
    },
    choicesContaienr: {
      gap: convertPxToDp(10),
      paddingBottom: convertPxToDp(20),
      maxHeight: convertPxToDp(100),
    },
    choiceContainer: {
      alignItems: 'flex-start',
      backgroundColor: 'rgba(60, 68, 70, 0.2)', // TODO:
      width: '100%',
      borderRadius: convertPxToDp(12),
      paddingVertical: convertPxToDp(8),
      paddingLeft: convertPxToDp(13),
    },
    choiceText: {
      fontSize: convertPxToDp(20),
      lineHeight: convertPxToDp(40),
      fontWeight: '400',
      color: '#3C4446', // TODO:
    },
  });
};
