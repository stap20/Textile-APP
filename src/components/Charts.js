import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {ChartWraper} from '@components';
import {convertPxToDp} from '@utils';

const data = {
  max_prod: {
    name: 'Max Production',
    data: [220, 182, 191, 234, 290, 330, 310, 100, 170, 10, 190],
    color: 'red',
  },
  min_prod: {
    name: 'Min Production',
    data: [120, 132, 101, 134, 90, 230, 210, 20, 75, 60, 100],
    color: 'green',
    itemStyle: {
      color: 'blue',
    },
    lineStyle: {
      color: 'green',
    },
  },
};

function getData(data, visibility) {
  const series = [];

  Object.keys(data).forEach(key => {
    if (visibility[key]) {
      const value = data[key];
      series.push({
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 9,
        lineStyle: {
          width: 3,
        },
        ...value,
      });
    }
  });

  return {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: 45,
      top: 10,
      right: 10,
      bottom: 20,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: [
        '02-JAN',
        '09-JAN',
        '16-JAN',
        '02-FAB',
        '09-FAB',
        '16-FAB',
        '02-MAR',
        '09-MAR',
        '16-MAR',
        '02-APR',
        '09-APR',
      ],
      splitLine: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      name: 'Date (2023)',
      nameLocation: 'middle',
      offset: 20,
      nameTextStyle: {
        color: '#3C4446',
        fontSize: 16,
        fontWeight: 500,
        padding: [25, 0, 0, 0],
      },
      axisLabel: {
        color: '#3C4446',
        align: 'center',
        fontSize: 14,
        fontWeight: 400,
        rotate: 45,
        margin: 10,
      },
    },

    yAxis: {
      type: 'value',
      name: 'Value (kg/hr)',
      offset: 20,
      nameLocation: 'middle',
      nameTextStyle: {
        color: '#3C4446',
        fontSize: 16,
        fontWeight: 500,
        padding: [0, 0, 20, 0],
      },
      axisLabel: {
        color: '#3C4446',
        align: 'center',
        fontSize: 14,
        fontWeight: 400,
      },
    },
    series: series,
  };
}

function Charts() {
  const [seriesVisibility, setSeriesVisibility] = useState({
    max_prod: true,
    min_prod: true,
  });

  // Function to handle series visibility toggle
  const handleToggleVisibility = filterValue => {
    setSeriesVisibility(prevVisibility => ({
      ...prevVisibility,
      [filterValue]: !prevVisibility[filterValue],
    }));
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => handleToggleVisibility('max_prod')}
        accessible={true}
        accessibilityLabel="Toggle Max Production">
        <Text style={{color: 'red'}}>max prod</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleToggleVisibility('min_prod')}>
        <Text style={{color: 'green'}}>min prod</Text>
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: 'white',
          width: convertPxToDp(950),
          height: convertPxToDp(600),
          padding: 5,
          borderRadius: 10,
        }}>
        <ChartWraper option={getData(data, seriesVisibility)} />
      </View>
    </View>
  );
}

export default Charts;
