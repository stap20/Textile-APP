import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default userCardStyle = theme => {
  return StyleSheet.create({
    container: {
      width: convertPxToDp(539),
      marginBottom: convertPxToDp(30),
      paddingHorizontal: convertPxToDp(30),
      paddingVertical: convertPxToDp(23),
      backgroundColor: 'white',
      borderRadius: convertPxToDp(50),
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: convertPxToDp(18),
    },

    name: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(30),
      fontWeight: '700',
    },


    machineContainer:{
      flexDirection:'row',
    },

    machineTitle: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(27),
      fontWeight: '600',
    },

    machineName: {
      textAlign: 'center',
      color: theme.colors.primary,
      fontSize: convertPxToDp(23),
      fontWeight: '500',
    },


    detailsContainer: {
      flex: 1,
      flexDirection: 'row',
    },

    leftColumn: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },

    rightColumn: {
      alignItems: 'flex-start',
      marginLeft: 'auto',
    },

    dataContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: convertPxToDp(18),
    },

    dataTitle: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(23),
      fontWeight: '600',
    },

    data: {
      textAlign: 'center',
      color: theme.colors.primary,
      fontSize: convertPxToDp(20),
      fontWeight: '500',
    },
  });
};
