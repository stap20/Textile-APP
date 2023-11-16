import {PixelRatio} from 'react-native';

export default function convertPxToDp(px) {
  return px / PixelRatio.get();
}
