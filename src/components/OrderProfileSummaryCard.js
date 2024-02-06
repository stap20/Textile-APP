import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import orderProfileSummaryCardStyle from '@styles/components/orderProfileSummaryCardStyle';
import Icon from './Icon';

import {prepareDuration} from '@utils';

export default function OrderProfileSummaryCard(props) {
  const {theme} = useTheme();
  const styles = orderProfileSummaryCardStyle(theme);

  const {
    stopDurationMinutes = 270,
    workingDurationMinutes = 70,
    totalDurationMinutes = 350,
    inProgressMachines = 5,
    pendingMachines = 3,
    completeRolls = 5,
  } = props;

  const data = [
    {
      title: 'Total Hours',
      icon: 'order-summary-check',
      details: prepareDuration(totalDurationMinutes),
    },
    {
      title: 'Working Hours',
      icon: 'order-summary-working-hours',
      details: prepareDuration(workingDurationMinutes),
    },
    {
      title: 'Stopping Hours',
      icon: 'order-summary-stop-hours',
      details: prepareDuration(stopDurationMinutes),
    },
    {
      title: 'In Progress',
      icon: 'order-summary-inprogress',
      details: inProgressMachines + ' Machine',
    },
    {
      title: 'Pending',
      icon: 'order-summary-pending',
      details: pendingMachines + ' Machine',
    },
    {
      title: 'Complete',
      icon: 'order-summary-done',
      details: completeRolls + ' Roll',
    },
  ];

  return (
    <View style={styles.container}>
      {data.map((item, idx) => {
        return (
          <View
            key={idx}
            style={[
              styles.summaryWrapperContaienr,
              idx + 1 === data.length && {borderRightWidth: 0},
            ]}>
            <View style={styles.summaryContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.iconDataContainer}>
                <Icon iconName={item.icon} />
                <Text style={styles.iconDetails}>{item.details}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}
