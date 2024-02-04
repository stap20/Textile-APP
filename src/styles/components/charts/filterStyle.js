import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default filterStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      flexDirection: 'row',
      overflow: 'hidden',
    },

    sideContainer: {
      padding: 5,
    },

    groupContainer: {
      justifyContent: 'space-between',
      marginLeft: convertPxToDp(45),
    },

    rowGroupContainer: {
      marginBottom: 5,
    },
  });
};
