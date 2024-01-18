import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import orderCardStyle from '@styles/components/orderCardStyle';
import Icon from './Icon';
import StatusChip from './StatusChip';

export default function OrderCard(props) {
  const {theme} = useTheme();
  const {
    orderNumber = '1234567',
    status = {state: 'finish', reason: 'Needle'},
    startDate = '26 / 9 / 2023',
    endDate = '26 / 10 / 2023',
    stoppedHour,
    workingHour,
    numberOfMachines,
    finishedQuan,
    totalQuan,
    onPress,
  } = props;

  const styles = orderCardStyle(theme);

  return (
    <View style={styles.container}>
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
          <Text style={styles.startDateText}>{startDate}</Text>
        </View>
        <View style={styles.endDateContainer}>
          <Text style={styles.endDateTitle}>End : </Text>
          <Text style={styles.endDateText}>{endDate}</Text>
        </View>
      </View>
    </View>
  );
}
