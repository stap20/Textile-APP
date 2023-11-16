import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default sidebarStyle = (theme, isActive) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: convertPxToDp(106),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: convertPxToDp(15),
      borderRadius: convertPxToDp(16),
      backgroundColor: isActive ? 'white' : 'transparent',
    },
    icon: {
      fontSize: convertPxToDp(46),
      color: isActive ? theme.colors.primary : theme.colors.sidebar_icon,
    },
  });
};
