import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import machineProfileSummaryCardStyle from '@styles/components/machineProfileSummaryCardStyle';
import Icon from './Icon';
import {prepareDuration} from '@utils';

export default function MachineProfileSummaryCard(props) {
  const {theme} = useTheme();
  const styles = machineProfileSummaryCardStyle(theme);

  const {
    stopDurationMinutes = 270,
    workingDurationMinutes = 70,
    idleDurationMinutes = 10,
    numberOfStops = 4770,
    totalDurationMinutes = 350,
    efficiency = 50,
    completeRolls = 5,
  } = props;

  var efficiencyColor = theme.colors.goodEfficiency;
  var efficiencyText = 'High';
  if (efficiency <= 70 && efficiency > 40) {
    efficiencyColor = theme.colors.normalEfficiency;
    efficiencyText = 'Medium';
  } else if (efficiency <= 40) {
    efficiencyColor = theme.colors.dangerEfficiency;
    efficiencyText = 'Low';
  }

  const data = [
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
      title: 'Idle Hours',
      icon: 'order-summary-pending',
      details: prepareDuration(idleDurationMinutes),
    },
    {
      title: 'No. Stops',
      icon: 'machine-summary-stop-number',
      details: numberOfStops,
    },
    {
      title: 'Efficiency',
      icon: 'machine-summary-efficiency',
      iconColor: efficiencyColor,
      details: efficiencyText,
      isEfficieny: true,
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
        const DataView = ({isEfficieny = false}) => {
          return isEfficieny ? (
            <>
              <View style={styles.iconDataContainer}>
                <Icon iconName={item.icon} iconColor={item.iconColor ?? null} />
                <Text style={[styles.iconDetails, {color: efficiencyColor}]}>
                  {item.details}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.efficiencySubTitle}>Percentage: </Text>
                <Text
                  style={[styles.efficiencySubTitle, {color: efficiencyColor}]}>
                  {efficiency}%
                </Text>
              </View>
            </>
          ) : (
            <View style={styles.iconDataContainer}>
              <Icon iconName={item.icon} iconColor={item.iconColor ?? null} />
              <Text style={styles.iconDetails}>{item.details}</Text>
            </View>
          );
        };
        return (
          <View
            key={idx}
            style={[
              styles.summaryWrapperContaienr,
              idx + 1 === data.length && {borderRightWidth: 0},
            ]}>
            <View style={styles.summaryContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <DataView isEfficieny={item.isEfficieny ?? false} />
            </View>
          </View>
        );
      })}
    </View>
  );
}
