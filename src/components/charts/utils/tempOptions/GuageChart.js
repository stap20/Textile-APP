import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ChartWraper, {getGradientColorObj} from './ChartWraper';
const gradientColor = [
  {offset: 0, color: '#B1B4B5'},
  {offset: 1, color: '#3C4446'},
];

// Create ECharts graphic.LinearGradient
const echartsLinearGradient = getGradientColorObj(gradientColor);

const option = {
  series: [
    {
      name: 'Speed Rate',
      type: 'gauge',
      min: 0,
      max: 40,
      splitNumber: 8,
      progress: {
        show: true,
        width: 15,
        roundCap: true,
        itemStyle: {
          color: echartsLinearGradient,
        },
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 15,
          color: [[1, '#3C444633']],
        },
      },
      axisLabel: {
        distance: 25, // Adjust the distance between labels and the axis line
        color: '#3C4446',
        fontSize: 16,
        fontWeight: '500',
      },
      splitLine: {
        length: 10, // Adjust the length of the split lines
        roundCap: true,
      },
      pointer: {
        offsetCenter: [0, 6],
        itemStyle: {
          color: echartsLinearGradient,
        },
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 18,
      },
      detail: {
        offsetCenter: [0, '90%'],
        valueAnimation: true,
        color: '#3C4446',
        fontSize: 22,
        fontWeight: '600',
        formatter: '{value} Km/h',
      },
      data: [
        {
          value: 30,
        },
      ],
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
          width: 500,
          height: 500,
          padding: 5,
          borderRadius: 10,
        }}>
        <ChartWraper option={option} />
      </View>
    </View>
  );
}

export default Charts;
