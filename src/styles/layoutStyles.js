import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default layoutStyles = theme => {
  return StyleSheet.create({
    container: {
      height: '100%',
      flexDirection: 'row',
    },
    mainContainer: {
      flex: 1,
      paddingLeft: convertPxToDp(82),
      paddingRight: convertPxToDp(81),
      backgroundColor: theme.backgroundColors.mainContainer,
    },
    sidebarContainer: {
      paddingVertical: convertPxToDp(73),
      paddingHorizontal: convertPxToDp(17),
      width: convertPxToDp(160),
      backgroundColor: theme.backgroundColors.sidebar,
    },
  });
};
