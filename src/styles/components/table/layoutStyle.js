import {StyleSheet} from 'react-native';
import {convertPxToDp} from '@utils';

export default layoutStyle = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,

    },
    headerRow: {
      flexDirection: 'row',
      backgroundColor: '#f0f0f0',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      justifyContent: 'center', // Center header cells
    },
    headerCell: {
      flex: 1,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    dataRow: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      justifyContent: 'center', // Center data cells
    },
    dataCell: {
      flex: 1,
      textAlign: 'center',
    },
  
  });
};
