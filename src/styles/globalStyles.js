import {PixelRatio} from 'react-native';

const convertToPxLayout = px => {
  return px / PixelRatio.get();
};

export {convertToPxLayout};
