import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default cardViewStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    addOrderContainer: {
      width: convertPxToDp(539),
      height: convertPxToDp(300),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: convertPxToDp(30),
      borderRadius: convertPxToDp(50),
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: theme.borderColors.addOrder,
    },
    addOrderText: {
      marginLeft: convertPxToDp(20),
      color: theme.colors.primary,
      fontSize: convertPxToDp(30),
      fontWeight: '700',
    },
  });
};
