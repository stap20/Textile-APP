import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

const switchTabStyle = (theme, isActive) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: convertPxToDp(8),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isActive
        ? theme.backgroundColors.tabSwitchActiveTab
        : 'transparent',
      borderColor: isActive ? theme.borderColors.tabSwitchActiveTab : 'transparent',
      borderWidth: isActive ? convertPxToDp(1) : 0,
    },

    title: {
      fontSize: convertPxToDp(20),
      fontWeight: '500',
      textAlign: 'center',
      color: isActive
        ? theme.colors.primary
        : theme.colors.secondary,

      letterSpacing: isActive ? convertPxToDp(-0.4) : convertPxToDp(0),
    },
  });
};

const switchStyle = theme => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: convertPxToDp(8),
      borderRadius: convertPxToDp(16),
      justifyContent: 'center',
      backgroundColor: theme.backgroundColors.switchContainer,
    },
  });
};

export {switchStyle, switchTabStyle};
