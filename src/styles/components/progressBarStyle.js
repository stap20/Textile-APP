import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default progressBarStyle = theme => {
  return StyleSheet.create({
    container: {
      width:'100%',
      height: convertPxToDp(8),
      backgroundColor: theme.backgroundColors.progressBarTrack,
      borderRadius: 10,
      overflow: 'hidden',
    },
    progressBar: {
      height: '100%',
      backgroundColor: theme.backgroundColors.progressBarFill,
      borderRadius: 10,
    },
  });
};
