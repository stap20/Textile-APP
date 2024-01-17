import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default filterButtonStyles = (theme, symbolColor, isActive) => {
  return StyleSheet.create({
    container: {
      height: convertPxToDp(18),
      flexDirection: 'row',
      alignItems: 'center',
    },

    symbol: {
      width: convertPxToDp(10),
      height: convertPxToDp(10),
      marginLeft: 0,
      marginRight: convertPxToDp(8),
      borderRadius: convertPxToDp(10),
      backgroundColor: isActive ? symbolColor : theme.colors.secondary,
    },

    title: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(18),
      fontWeight: '400',
      lineHeight: convertPxToDp(18),
    },
  });
};
