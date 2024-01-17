import {StyleSheet, View, Text, PixelRatio} from 'react-native';
import {LinearProgress} from 'react-native-elements';
import {
  machinesBottom,
  machinesHeader,
  machinesDetails,
  machinesStyle,
} from '@styles/machines';
import {useTheme} from '@theme/ThemeProvider';
import {convertPxToDp} from '@styles/globalStyles';

export default function MachineCard({info, style}) {
  const {theme} = useTheme();
  const styles = machinesStyle(theme);
  const header = machinesHeader(theme, info.status);
  const details = machinesDetails(theme);
  const bottom = machinesBottom(theme);

  return (
    <View style={[style, styles.container]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={header.orderNumContainer}>
            <Text style={header.orderNumText}>Machine Name</Text>
          </View>
          <View style={header.statusContainer}>
            <View style={header.status}>
              <Text style={header.statusText}>
                {info.status == 'Stopped'
                  ? `Stopped   >   Reason`
                  : info.status}
              </Text>
            </View>
            <View style={header.statusIcon}>{/* Icon Image */}</View>
          </View>
        </View>
        <View style={styles.details}>
          <View style={[details.orderContainer]}>
            <View style={{flex: 1}}>
              <Text style={details.numText}>12345678910</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={details.orderText}>
                Order<Text style={details.colonText}> : </Text>
                <Text style={details.numText}>1234567</Text>
              </Text>
            </View>
          </View>
          <View style={[details.speedRateContainer]}>
            <View style={{flex: 1}}>
              <Text style={details.numText}>123456789</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={details.speedRateText}>
                Speed Rate<Text style={details.colonText}> : </Text>
                <Text style={details.numText}>15 Km/h</Text>
              </Text>
            </View>
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
              <Text style={details.infoText}>12</Text>
            </View>
            <View style={details.qualityContainer}>
              <View style={details.qualityIcon}></View>
              <Text style={details.qualityText}>80 %</Text>
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
                style={{borderRadius: convertPxToDp(100)}}
              />
            </View>
          </View>
          <View style={bottom.viewProfileAction}>
            <Text style={bottom.actionText}>View Order</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
