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
      backgroundColor: theme.backgroundColors.main_container,
    },
    sidebarContainer: {
      paddingVertical: convertPxToDp(73),
      paddingHorizontal: convertPxToDp(17),
      width: convertPxToDp(160),
      backgroundColor: theme.backgroundColors.sidebar,
    },
  });
};
