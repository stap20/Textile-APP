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
    filterContainer: {
      marginLeft: convertPxToDp(374),
    },
  });
};
