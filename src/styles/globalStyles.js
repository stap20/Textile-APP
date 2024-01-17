import {PixelRatio} from 'react-native';

const convertPxToDp = px => {
  return px / PixelRatio.get();
};

export {convertPxToDp};
