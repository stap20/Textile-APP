import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ChartWraper from './ChartWraper';
import {convertPxToDp} from '@utils';
const option = {
  grid: {
    left:20,
    right:90,
    top:50,
    bottom:10,
    containLabel: true,
  },
  xAxis: {
    name: 'Percentage',
    nameLocation: 'end',
    type: 'value',
    boundaryGap: false,
    max: 100,
    interval: 10,
    axisLabel: {
      formatter: '{value}%',
      color: '#3C4446',
      fontSize: 14,
      fontWeight: 400,
    },
    splitLine: {show: false},
    nameTextStyle: {
      align: 'left',
      verticalAlign: 'top',
      padding: [7, 0, 0, 25],
      color: '#3C4446',
      fontSize: 20,
      fontWeight: 500,
    },
  },
  yAxis: [
    {
      name: 'Type',
      type: 'category',
      data: ['Complete Roll', 'Feeder', 'Gate', 'Idle', 'Needle'],
      offset: 60,
      axisLine: {
        show: false, // Set show to false to hide y-axis line
      },
      axisTick: {
        show: false, // Set show to false to hide y-axis ticks
      },
      axisLabel: {
        color: '#3C4446',
        align: 'center',
        fontSize: 16,
        fontWeight: 400,
      },

      nameTextStyle: {
        align: 'center',
        color: '#3C4446',
        fontSize: 20,
        fontWeight: 500,
        padding: [0, 135, 0, 0],
      },
    },
    {
      type: 'category',
      data: [10.62, 31.19, 24.33, 33.71, 5], // Empty array for secondary y-axis
      offset: 75,
      axisLine: {
        show: false, // Set show to false to hide y-axis line
      },
      axisTick: {
        show: false, // Set show to false to hide y-axis ticks
      },
      axisLabel: {
        formatter: '{value}%',
        color: '#3C4446',
        align: 'center',
        fontSize: 16,
        fontWeight: 400,
      },
    },
  ],
  series: [
    {
      name: '2012',
      type: 'bar',
      barGap: '-100%',
      barWidth:22,
      data: [
        {value: 100, itemStyle: {color: '#D7C1B066'}},
        {value: 100, itemStyle: {color: '#81965B4D'}},
        {value: 100, itemStyle: {color: '#D7D9D599'}},
        {value: 100, itemStyle: {color: '#8B887D4D'}},
        {value: 100, itemStyle: {color: '#3C444633'}},
      ],
      itemStyle: {
        borderRadius: 8,
      },
    },
    {
      name: '2011',
      type: 'bar',
      barWidth:22,
      data: [
        {value: 10.62, itemStyle: {color: '#D7C1B0'}},
        {value: 31.19, itemStyle: {color: '#81965B'}},
        {value: 24.33, itemStyle: {color: '#D7D9D5'}},
        {value: 33.71, itemStyle: {color: '#8B887D'}},
        {value: 5, itemStyle: {color: '#3C4446'}},
      ],
      itemStyle: {
        borderRadius: 8,
      },
    },
  ],
};

function Charts() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          width: convertPxToDp(1087),
          height: convertPxToDp(514),
          padding: 5,
          borderRadius: 10,
        }}>
        <ChartWraper option={option} />
      </View>
    </View>
  );
}

export default Charts;
