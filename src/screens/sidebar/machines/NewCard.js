import {StyleSheet, View, Text, PixelRatio} from 'react-native';
import {LinearProgress} from 'react-native-elements';
import {useTheme} from '@theme/ThemeProvider';
import {convertToPxLayout} from '@styles/globalStyles';
import Svg, {Path} from 'react-native-svg';

const AddIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    fill="none"
    {...props}>
    <Path
      fill="#3C4446"
      d="M3.832 23c0-9.035 0-13.553 2.807-16.36 2.807-2.807 7.324-2.807 16.36-2.807 9.035 0 13.553 0 16.36 2.807 2.806 2.807 2.806 7.325 2.806 16.36s0 13.553-2.807 16.36c-2.806 2.807-7.324 2.807-16.36 2.807-9.035 0-13.552 0-16.36-2.807C3.833 36.553 3.833 32.035 3.833 23Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={3.75}
      d="M28.75 23H23m0 0h-5.75M23 23v-5.75M23 23v5.75"
    />
  </Svg>
);

export default function NewCard({text, style}) {
  const {theme, toggleTheme, themeStyles} = useTheme();
  const styles = newOrdersStyle(themeStyles);

  return (
    <View style={[style, styles.container]}>
      <View style={styles.plusContainer}>
        <AddIcon />
      </View>
      <Text style={styles.newText}>{text}</Text>
    </View>
  );
}

const cardWidth = convertToPxLayout(539); // 539
const cardHeight = convertToPxLayout(330); // 330
const cardRadius = convertToPxLayout(50);
const fontfamily = 'Inter';

const newOrdersStyle = theme => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: cardWidth,
      height: cardHeight,
      borderRadius: cardRadius,
      borderWidth: convertToPxLayout(2),
      borderStyle: 'dashed',
      borderColor: '#3C4446',
      padding: convertToPxLayout(30),
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    plusContainer: {
      marginRight: convertToPxLayout(20),
      transform: [{scale: 1 / 1.5}],
    },
    plusIcon: {},
    newText: {
      fontFamily: fontfamily,
      fontSize: convertToPxLayout(20),
      // lineHeight: convertToPxLayout(20),
      fontWeight: '700',
      color: '#3C4446',
    },
  });
};
