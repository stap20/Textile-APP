import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {chartStyles} from '@styles/components/charts';
import ChartWraper from './ChartWraper';
import Filter from './Filter';
import {generatePieChartOption, processPieChartData} from '../utils';

export default function PieChart({config, title, isClickableFilter, display}) {
  const {theme} = useTheme();
  const styles = chartStyles(theme);
  var {visibility, filterData, chartData, colors} = processPieChartData(
    config,
    theme,
  );

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

  const chartConfig = {chartData, colors, filterVisibility, theme, display};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.chartArea}>
          <ChartWraper option={generatePieChartOption(chartConfig)} />
        </View>
        <View style={{marginLeft: 10}}>
          <Filter
            data={filterData}
            onToggle={handleToggleVisibility}
            numberOfRows={chartData.length}
            isTopView={false}
            isClickable={isClickableFilter && filterData.length > 1}
          />
        </View>
      </View>
    </View>
  );
}
