import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import orderCardStyle from '@styles/components/orderCardStyle';
import StatusChip from './StatusChip';
import CardSummaryChip from './CardSummaryChip';
import ProgressBar from './ProgressBar';

export default function OrderCard(props) {
  const {theme} = useTheme();
  const {
    orderNumber = '1234567',
    status = {state: 'finish', reason: 'Needle'},
    startDate = new Date(2023, 9 - 1, 26),
    endDate = new Date(2023, 10 - 1, 26),
    stoppedHour = 36,
    workingHour = 36,
    numberOfMachines = 5,
    finishedQuan = 15,
    totalQuan = 50,
    style,
  } = props;

  const progress = parseInt((finishedQuan / totalQuan) * 100);
  const styles = orderCardStyle(theme);

  const startDateText =
    startDate.getDate() +
    ' / ' +
    (startDate.getMonth() + 1) +
    ' / ' +
    startDate.getFullYear();

  const endDateText =
    endDate.getDate() +
    ' / ' +
    (endDate.getMonth() + 1) +
    ' / ' +
    endDate.getFullYear();

  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <View style={styles.orderNumberContainer}>
          <Text style={styles.title}>Order Number : </Text>
          <Text style={styles.orderNumber}>{orderNumber}</Text>
        </View>
        <StatusChip status={status} />
      </View>
      <View style={styles.details}>
        <View style={styles.startDateContainer}>
          <Text style={styles.startDateTitle}>Start : </Text>
          <Text style={styles.startDateText}>{startDateText}</Text>
        </View>
        <View style={styles.endDateContainer}>
          <Text style={styles.endDateTitle}>End : </Text>
          <Text style={styles.endDateText}>{endDateText}</Text>
        </View>
        <View style={styles.orderSummaryChipContainer}>
          <CardSummaryChip type={'stopHours'} value={stoppedHour + ' hours'} />
          <CardSummaryChip
            type={'workingHours'}
            value={workingHour + ' hours'}
          />
          <CardSummaryChip type={'numberOfMachine'} value={numberOfMachines} />
        </View>
        <View style={styles.footer}>
          <View style={styles.progressContainer}>
            <View style={styles.progressTitleContainer}>
              <Text style={styles.progressText}>Progress</Text>
              <Text style={styles.progressText}>{progress}%</Text>
            </View>

            <ProgressBar progress={progress} />
            <Text style={styles.progressDetails}>
              {finishedQuan} Roll/{totalQuan}
            </Text>
          </View>
          <TouchableOpacity style={styles.viewBtn} onPress={() => {}}>
            <Text style={styles.viewBtnText}>View Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
