import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default dropDownStyle = theme => {
  return StyleSheet.create({
    container: {
      gap: convertPxToDp(5),
    },
    selectedContainer: {
      flexDirection: 'row',
      backgroundColor: 'white',
      minWidth: convertPxToDp(307),
      maxWidth: convertPxToDp(638 + 38 + 40),
      minHeight: convertPxToDp(65),
      borderRadius: convertPxToDp(20),
      borderWidth: convertPxToDp(3),
      borderColor: '#EBECEC',
      padding: convertPxToDp(10),
    },
    selectBtnContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      // backgroundColor: 'red',
      // paddingTop: convertPxToDp(12),
    },

    itemsContaienr: {
      // backgroundColor: 'lightblue',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
      gap: convertPxToDp(10),
      marginRight: 'auto',
    },
    itemContaienr: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'rgba(60, 68, 70, 0.2)', // TODO:
      width: convertPxToDp(149),
      height: convertPxToDp(45),
      borderRadius: convertPxToDp(12),
    },
    itemText: {
      fontSize: convertPxToDp(20),
      lineHeight: convertPxToDp(40),
      fontWeight: '400',
      color: '#3C4446', // TODO:
    },

    placeholderText: {
      fontSize: convertPxToDp(20),
      fontWeight: '500',
      color: 'grey', // placeholder
    },
  });
};
