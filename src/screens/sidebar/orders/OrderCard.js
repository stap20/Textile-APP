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
import {useEffect} from 'react';

export default function OrderCard({info, style}) {
  const {theme, toggleTheme, themeStyles} = useTheme();
  const styles = ordersStyle(themeStyles);
  const header = ordersHeader(themeStyles, info.status);
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
            <View style={header.statusIcon}>{/* Icon Image */}</View>
            <View style={header.status}>
              <Text style={header.statusText}>{info.status}</Text>
            </View>
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
