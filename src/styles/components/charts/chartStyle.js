import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default chartStyles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: convertPxToDp(45),
      paddingVertical: convertPxToDp(36),
      borderRadius: convertPxToDp(40),
    },
    header: {
      flexDirection: 'row',
      height: convertPxToDp(50),
      marginBottom: convertPxToDp(20),
    },

    filterContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      flexDirection: 'row',
      overflow: 'hidden',
    },

    filterColumnContainer: {
      justifyContent: 'space-between',
      marginLeft: convertPxToDp(45),
    },

    title: {
      marginRight: 10,
      color: '#3C4446',
      fontSize: convertPxToDp(32),
      fontWeight: '700',
      lineHeight: convertPxToDp(48),
    },

    chartArea: {
      flex: 1,
      borderTopWidth: convertPxToDp(1),
      paddingTop:convertPxToDp(17),
      borderColor: '#3C444666',
    },
  });
};
