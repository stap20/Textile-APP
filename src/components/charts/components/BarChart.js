import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {chartStyles} from '@styles/components/charts';
import ChartWraper from './ChartWraper';
import Filter from './Filter';
import {generateBarChartOption, processBarChartData} from '../utils';

export default function BarChart({config, title, isClickableFilter}) {
  const {theme} = useTheme();
  const styles = chartStyles(theme);
  const {xAxis, yAxis, data} = config;
  var {visibility, filterData, chartData} = processBarChartData(data, theme);

  const [filterVisibility, setFilterVisibility] = useState(visibility);

  filterData = filterData.map(ele => ({
    ...ele,
    isActive: filterVisibility[ele.id],
  }));

  // Function to handle series visibility toggle
  const handleToggleVisibility = filterValue => {
    setFilterVisibility(prevVisibility => ({
      ...prevVisibility,
      [filterValue]: !prevVisibility[filterValue],
    }));
  };

  const chartConfig = {xAxis, yAxis, chartData, filterVisibility, theme};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Filter
          data={filterData}
          onToggle={handleToggleVisibility}
          numberOfRows={2}
          isClickable={isClickableFilter && filterData.length > 1}
        />
      </View>
      <View style={styles.chartArea}>
        <ChartWraper option={generateBarChartOption(chartConfig)} />
      </View>
    </View>
  );
}
