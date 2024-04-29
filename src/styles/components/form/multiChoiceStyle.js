import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default multiChoiceStyle = theme => {
  return StyleSheet.create({
    container: {},
    title: {
      fontSize: convertPxToDp(30),
      fontWeight: '500',
      color: 'black', // primary
      marginBottom: convertPxToDp(23),
    },
  });
};
