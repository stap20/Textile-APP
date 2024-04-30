import Toast from 'react-native-toast-message';

export default ToastCaller = (type, message) => {
  Toast.show({type: type, text1: message});
  return;
};
