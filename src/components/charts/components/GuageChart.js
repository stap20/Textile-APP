import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {chartStyles} from '@styles/components/charts';
import ChartWraper from './ChartWraper';
import {generateGuageChartOption} from '../utils';

export default function GuageChart({config, title, display}) {
  const {theme} = useTheme();
  const styles = chartStyles(theme);

  const {value, maxValue} = config

  const chartConfig = {value, maxValue, theme, display};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.chartArea}>
        <ChartWraper option={generateGuageChartOption(chartConfig)} />
      </View>
    </View>
  );
}
