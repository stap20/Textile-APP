import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

const switchTabStyle = (theme, isActive) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: convertPxToDp(20),
      paddingVertical: convertPxToDp(14),
      borderRadius: convertPxToDp(16),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isActive
        ? theme.backgroundColors.filterSwitchActiveTab
        : 'transparent',
    },
    title: {
      fontSize: convertPxToDp(22),
      fontWeight: '600',
      color: isActive
        ? theme.colors.primary
        : theme.colors.secondary,
      textAlign: 'center',
    },
  });
};

const switchStyle = theme => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: 'center',
      paddingHorizontal: convertPxToDp(20),
      paddingVertical: convertPxToDp(14),
      borderRadius: convertPxToDp(16),
      justifyContent: 'center',
      backgroundColor: theme.backgroundColors.switchContainer,
    },
  });
};

export {switchStyle, switchTabStyle};
