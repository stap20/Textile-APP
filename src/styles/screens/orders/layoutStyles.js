import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default layoutStyles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    header: {
      height: convertPxToDp(120),
      paddingTop: convertPxToDp(17),
      paddingBottom: convertPxToDp(20),
    },
    mainContainer: {
      flex: 1,
      // backgroundColor: 'yellow',
    },
  });
};
