import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@theme/ThemeProvider';
import machineCardStyle from '@styles/components/machineCardStyle';
import StatusChip from './StatusChip';
import CardSummaryChip from './CardSummaryChip';
import ProgressBar from './ProgressBar';

export default function MachineCard(props) {
  const {theme} = useTheme();
  const styles = machineCardStyle(theme);
  const navigation = useNavigation();

  const {
    machineName = 'Machine-PAILUNG-1',
    machineNumber = 'A1900584',
    machineAddress = '08:3A:F2:8F:55:64',
    orderNumber = 'Not Assigned',
    speed = 15,
    numberOfRoll = 12,
    status = {state: 'finish', reason: 'Needle'},
    stoppedHour = 36,
    workingHour = 36,
    efficiency = 80,
    progress = 30,
    style,
  } = props;

  var currentColor = theme.colors.goodEfficiency;

  if (efficiency <= 70 && efficiency > 40) {
    currentColor = theme.colors.normalEfficiency;
  } else if (efficiency <= 40) {
    currentColor = theme.colors.dangerEfficiency;
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Text style={styles.title}>{machineName}</Text>
        <StatusChip status={status} />
      </View>
      <View style={styles.details}>
        <View style={styles.detailsRow}>
          <Text style={styles.detailsText}>{machineNumber}</Text>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={styles.detailsTitle}>Order : </Text>
            <Text style={styles.detailsText}>{orderNumber}</Text>
          </View>
        </View>
        <View style={styles.detailsRow}>
          <Text style={styles.detailsText}>{machineAddress}</Text>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={styles.detailsTitle}>Speed Rate : </Text>
            <Text style={styles.detailsText}>{`${speed} rpm`}</Text>
          </View>
        </View>
        <View style={styles.orderSummaryChipContainer}>
          <CardSummaryChip type={'stopHours'} value={stoppedHour + ' hours'} />
          <CardSummaryChip
            type={'workingHours'}
            value={workingHour + ' hours'}
          />
          <CardSummaryChip type={'numberOfRoll'} value={numberOfRoll} />
          <CardSummaryChip
            type={'efficiency'}
            value={efficiency + ' %'}
            color={currentColor}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.progressContainer}>
            <View style={styles.progressTitleContainer}>
              <Text style={styles.progressText}>Progress</Text>
              <Text style={styles.progressText}>{progress}%</Text>
            </View>

            <ProgressBar progress={progress} />
          </View>
          <TouchableOpacity
            style={styles.viewBtn}
            onPress={() => {
              navigation.navigate('machines', {
                screen: 'machine_profile_screen',
                params: {machineNumber: machineNumber},
              });
            }}>
            <Text style={styles.viewBtnText}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
