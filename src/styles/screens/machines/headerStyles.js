import {StyleSheet, Platform} from 'react-native';
import {convertPxToDp} from '@utils';
import Typography from '@styles/typography';

export default headerStyles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      color: theme.colors.primary,
      ...Typography.screenTitle,
    },
    tabSwitchContainer: {
      width: convertPxToDp(214),
      height: convertPxToDp(52),
      marginLeft: convertPxToDp(60),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    filterContainer: {
      marginLeft: convertPxToDp(253),
    },
  });
};
