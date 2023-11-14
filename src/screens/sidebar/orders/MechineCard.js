import {StyleSheet, View, Text, PixelRatio} from 'react-native';
import {LinearProgress} from 'react-native-elements';
import {
  ordersBottom,
  ordersHeader,
  ordersDetails,
  ordersStyle,
} from '@styles/orders';
import {useTheme} from '@theme/ThemeProvider';
import {convertToPxLayout} from '@styles/globalStyles';

export default function MechineCard({info, style}) {
  const {theme, toggleTheme, themeStyles} = useTheme();
  const styles = ordersStyle(themeStyles);
  const header = ordersHeader(themeStyles);
  const details = ordersDetails(themeStyles);
  const bottom = ordersBottom(themeStyles);

  return (
    <View style={[style, styles.container]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={header.orderNumContainer}>
            <Text style={header.orderNumText}>
              Order Number{' '}
              <Text style={{fontSize: convertToPxLayout(25)}}>: </Text>
              <Text
                style={{fontWeight: '500', fontSize: convertToPxLayout(18)}}>
                {info.order_number}
              </Text>
            </Text>
          </View>
          <View style={header.statusContainer}>
            <View style={header.status}>
              <Text style={header.statusText}>{info.status}</Text>
            </View>
            <View style={header.statusIcon}>{/* Icon Image */}</View>
          </View>
        </View>
        <View style={styles.details}>
          <View style={details.startContainer}>
            <Text style={details.startText}>
              Start <Text style={{fontSize: convertToPxLayout(25)}}>:</Text>{' '}
              <Text
                style={{fontWeight: '500', fontSize: convertToPxLayout(18)}}>
                {info.start_date}
              </Text>
            </Text>
          </View>
          <View style={details.EndContainer}>
            <Text style={details.EndText}>
              End <Text style={{fontSize: convertToPxLayout(25)}}>:</Text>{' '}
              <Text
                style={{fontWeight: '500', fontSize: convertToPxLayout(18)}}>
                {info.end_date}
              </Text>
            </Text>
          </View>
          <View style={details.moreContainer}>
            <View style={details.PausedContainer}>
              <View style={details.PausedIcon}></View>
              <Text style={details.PausedText}>
                {info.stop_hour + ' hours'}
              </Text>
            </View>
            <View style={details.WorkingContainer}>
              <View style={details.WorkingIcon}></View>
              <Text style={details.WorkingText}>
                {info.working_hour + ' hours'}
              </Text>
            </View>
            <View style={details.infoContainer}>
              <View style={details.infoIcon}></View>
              <Text style={details.infoText}>{info.number_of_machines}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={bottom.progressContainer}>
            <View style={bottom.progressIndicatorInfo}>
              <Text style={bottom.progressText}>Progress</Text>
              <Text style={bottom.progressTextPer}>
                {info.progress_percent + '%'}
              </Text>
            </View>
            <View style={bottom.indicator}>
              <LinearProgress
                color="rgba(60, 68, 70, 1)" // temp
                trackColor="#E9E9E9" // temp
                value={info.progress_percent / 100}
                variant="determinate"
                style={{borderRadius: convertToPxLayout(100)}}
              />
            </View>
            <View style={bottom.progressSpeed}>
              <Text style={bottom.progressSpeedText}>
                {info.finished_rolls + ' Km/' + info.total_rolls}
              </Text>
            </View>
          </View>
          <View style={bottom.viewOrderAction}>
            <Text style={bottom.actionText}>View Order</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// const bottom = StyleSheet.create({
//   progressContainer: {
//     flex: 2,
//     marginRight: 66,
//     // backgroundColor: "red",
//     justifyContent: 'center',
//   },
//   progressIndicatorInfo: {
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//   },
//   indicator: {},
//   progressSpeed: {
//     // justifyContent: "center",
//     alignItems: 'flex-end',
//   },

//   progressText: {
//     fontFamily: fontfamily,
//     fontWeight: '600',
//     fontSize: PixelRatio.getPixelSizeForLayoutSize(20),
//     color: '#3C4446',
//   },
//   progressTextPer: {
//     fontFamily: fontfamily,
//     fontWeight: '600',
//     fontSize: PixelRatio.getPixelSizeForLayoutSize(20),
//     color: '#3C4446',
//   },
//   progressSpeedText: {
//     fontFamily: fontfamily,
//     fontWeight: '500',
//     fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
//     color: '#3C4446',
//   },

//   viewOrderAction: {
//     flex: 1,
//     backgroundColor: '#3C4446',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   actionText: {
//     fontFamily: fontfamily,
//     fontWeight: '600',
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
// });

// const header = StyleSheet.create({
//   orderNumContainer: {
//     // flex: ,
//     // backgroundColor: "red",
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 6,
//   },
//   orderNumText: {
//     // flex: 1,
//     // height: "100%",
//     width: '100%',
//     fontFamily: fontfamily,
//     fontWeight: '700',
//     textAlign: 'left',
//     fontSize: PixelRatio.getPixelSizeForLayoutSize(30),
//     // lineHeight: PixelRatio.getPixelSizeForLayoutSize(20),
//   },
//   statusContainer: {
//     // flex: 1,
//     height: 43,
//     flexDirection: 'row-reverse',
//     alignSelf: 'center',
//     backgroundColor: 'rgba(convertToPxLayout(25), 135, 84, 0.2)',
//     // justifyContent: "space-evenly",
//     alignItems: 'center',
//     paddingHorizontal: 12,
//     borderRadius: 15,
//   },
//   status: {
//     marginLeft: 12,
//   },
//   statusText: {
//     fontFamily: fontfamily,
//     fontSize: PixelRatio.getPixelSizeForLayoutSize(16),
//     fontWeight: '700',
//     lineHeight: PixelRatio.getPixelSizeForLayoutSize(19.36),
//     textAlign: 'left',
//     color: cardStatus ? '#198754' : '#F29B26',
//   },
//   statusIcon: {
//     width: 15,
//     height: 15,
//     borderRadius: 999,
//     backgroundColor: cardStatus ? '#198754' : '#F29B26',
//   },
// });

// const details = StyleSheet.create({
//   startContainer: {
//     flex: 1,
//     // backgroundColor: "#123456",
//   },
//   startText: {
//     fontFamily: fontfamily,
//     fontSize: PixelRatio.getPixelSizeForLayoutSize(30),
//     fontWeight: '700',
//     color: 'rgba(60, 68, 70, 1)',
//   },

//   EndContainer: {
//     flex: 1,
//     // backgroundColor: "#789056",
//   },
//   EndText: {
//     fontFamily: fontfamily,
//     fontSize: PixelRatio.getPixelSizeForLayoutSize(30),
//     fontWeight: '700',
//     color: 'rgba(60, 68, 70, 1)',
//   },

//   moreContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     // backgroundColor: "#ffffff",
//   },
//   PausedContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     backgroundColor: 'rgba(60, 68, 70, 0.1)',
//     paddingHorizontal: 12,
//     height: 43,
//     width: 116,
//     borderRadius: 15,
//   },
//   PausedIcon: {
//     width: 15,
//     height: 15,
//     borderRadius: 999,
//     backgroundColor: '#F29B26',
//     marginRight: 10,
//   },
//   PausedText: {
//     fontFamily: fontfamily,
//     fontWeight: '600',
//     textAlign: 'left',
//     fontSize: 15,
//   },
//   WorkingContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     backgroundColor: 'rgba(60, 68, 70, 0.1)',
//     paddingHorizontal: 12,
//     height: 43,
//     width: 116,
//     borderRadius: 15,
//     marginHorizontal: 5,
//   },
//   WorkingIcon: {
//     width: 15,
//     height: 15,
//     borderRadius: 999,
//     backgroundColor: '#F29B26',
//     marginRight: 10,
//   },
//   WorkingText: {
//     fontFamily: fontfamily,
//     fontWeight: '600',
//     textAlign: 'left',
//     fontSize: 15,
//   },
//   infoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     backgroundColor: 'rgba(60, 68, 70, 0.1)',
//     paddingHorizontal: 12,
//     // paddingLeft: 0,
//     height: 43,
//     width: 116,
//     borderRadius: 15,
//   },
//   infoIcon: {
//     width: 15,
//     height: 15,
//     borderRadius: 999,
//     backgroundColor: '#F29B26',
//     marginRight: 10,
//   },
//   infoText: {
//     fontFamily: fontfamily,
//     fontWeight: '600',
//     textAlign: 'left',
//     fontSize: 15,
//   },
// });

// const styles = StyleSheet.create({
//   container: {},
//   content: {
//     flex: 1,
//     maxWidth: cardWidth,
//     minWidth: cardWidth,
//     maxHeight: cardHeight,
//     minHeight: cardHeight,
//     borderRadius: cardRadius,
//     padding: 30,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     flex: 2,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     // backgroundColor: "#a23df2",
//   },
//   details: {
//     flex: 6,
//     // backgroundColor: "lightblue",
//   },
//   bottom: {
//     flex: 2,
//     flexDirection: 'row',
//     // backgroundColor: "#accdf2",
//   },
// });
