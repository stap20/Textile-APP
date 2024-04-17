import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default attachmentCardStyle = theme => {
  return StyleSheet.create({
    container: {
      width: convertPxToDp(539),
      height: convertPxToDp(150),
      flexDirection: 'row',
      marginBottom: convertPxToDp(30),
      paddingHorizontal: convertPxToDp(30),
      padding: convertPxToDp(30),
      backgroundColor: 'white',
      borderRadius: convertPxToDp(50),
    },

    iconContainer: {
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      width: convertPxToDp(70),
      height: convertPxToDp(70),
      marginRight: convertPxToDp(20),
      borderRadius: convertPxToDp(70),
      backgroundColor: theme.backgroundColors.attachmentIconContainer,
    },

    dataContainer: {
      flex: 1,
      justifyContent: 'space-between',
      paddingTop: 2,
      paddingBottom:3,
    },

    dataRowContainer: {
      flexDirection: 'row',
    },

    title: {
      color: theme.colors.primary,
      fontSize: convertPxToDp(25),
      fontWeight: '700',
    },

    data: {
      alignSelf: 'center',
      textAlign: 'center',
      color: theme.colors.primary,
      fontSize: convertPxToDp(20),
      fontWeight: '500',
    },
  });
};
