import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default machineTableStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    headerRow: {
      height: convertPxToDp(64),
      paddingHorizontal: convertPxToDp(30),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: convertPxToDp(16),
      borderTopRightRadius: convertPxToDp(16),
      backgroundColor: '#FFF',
    },

    headerCell: {
      flex: 1,
      paddingHorizontal: 5,
      textAlign: 'center',
      color: theme.colors.primary,
      fontSize: convertPxToDp(18),
      fontWeight: '700',
    },

    dataRow: {
      height: convertPxToDp(64),
      paddingHorizontal: convertPxToDp(30),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dataRowLast: {
      borderBottomLeftRadius: convertPxToDp(16),
      borderBottomRightRadius: convertPxToDp(16),
    },

    dataCellContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    dataCellText: {
      textAlign: 'center',
      color: theme.colors.primary,
      fontSize: convertPxToDp(17),
      fontWeight: '500',
    },

    progressBarContainer: {
      flexDirection: 'column',
      width: convertPxToDp(100),
    },
    progressText: {
      alignSelf: 'flex-end',
      marginBottom: convertPxToDp(6),
      color: theme.colors.primary,
      fontSize: convertPxToDp(17),
      fontWeight: '500',
    },

    actionContainer: {
      width: convertPxToDp(90),
      marginLeft:convertPxToDp(30),
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:5,
    },
    actionHeaderText:{
      width: convertPxToDp(90),
      marginLeft:convertPxToDp(30),
      textAlign: 'center',
      color: theme.colors.primary,
      fontSize: convertPxToDp(18),
      fontWeight: '700',
    }
  });
};
