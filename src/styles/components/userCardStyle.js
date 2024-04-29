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
      height: convertPxToDp(70),
      marginBottom: convertPxToDp(18),
    },

    userHeaderContainer: {
      flex: 1,
      flexDirection: 'row',
    },

    profileImage: {
      width: convertPxToDp(70),
      height: convertPxToDp(70),
      borderRadius: 70,
    },

    userNameContainer: {
      flex: 1,
      paddingTop: convertPxToDp(4),
      marginLeft: convertPxToDp(20),
      marginBottom: convertPxToDp(15),
    },

    name: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(22),
      fontWeight: '700',
    },

    userName: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(22),
      fontWeight: '500',
    },

    detailsContainer: {
      flex: 1,
      paddingHorizontal: convertPxToDp(15),
    },

    detailsRow: {
      height: convertPxToDp(40),
      marginBottom: convertPxToDp(18),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    dataContainer: {
      flexDirection: 'row',
    },

    dataSymbolContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: convertPxToDp(40),
      height: convertPxToDp(40),
      borderRadius: 40,
      backgroundColor: theme.colors.primary,
    },

    dataWrapper: {
      marginLeft: convertPxToDp(15),
      marginBottom: convertPxToDp(10),
    },

    dataTitle: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(20),
      fontWeight: '500',
    },

    dataType: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(16),
      fontWeight: '400',
    },
  });
};
