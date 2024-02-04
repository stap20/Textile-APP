import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default tableViewStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    addMachineBtn: {
      alignSelf: 'flex-start',
      paddingVertical: convertPxToDp(20),
      paddingHorizontal: convertPxToDp(40),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: convertPxToDp(36),
      borderRadius: convertPxToDp(16),
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: theme.borderColors.addOrder,
    },
    addMachineText: {
      marginLeft: convertPxToDp(20),
      color: theme.colors.primary,
      fontSize: convertPxToDp(20),
      fontWeight: '700',
    },
    tableContainer: {
      flex: 1,
    },
  });
};
