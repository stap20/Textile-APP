import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import cardSummaryChip from '@styles/components/cardSummaryChipStyle';
import Icon from './Icon';

export default function CardSummaryChip({type, value, style = {}}) {
  const {theme} = useTheme();
  const styles = cardSummaryChip(theme);

  var chipIcon = {
    stopHours: 'card-chip-stop-hours',
    workingHours: 'card-chip-working-hours',
    numberOfMachine: 'card-chip-machine',
    numberOfRoll: 'card-chip-machine',
    efficiency: 'card-chip-machine',
  };

  return (
    <View style={[styles.container, style]}>
      <Icon iconName={chipIcon[type]} />
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{value}</Text>
      </View>
    </View>
  );
}
