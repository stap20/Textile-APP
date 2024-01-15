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
      name: 'Pressure',
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      progress: {
        show: true,
        width: 30,
        roundCap: true,
        itemStyle: {
          color: echartsLinearGradient,
        },
      },
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 30,
          color: [[1, '#3C444633']],
        },
      },
      axisLabel:{
        show:false,
      },
      splitLine:{
        show:false,
      },
      axisTick:{
        show:false
      },
      pointer:{
        show:false,
      },
      detail: {
        offsetCenter:[0,0],
        valueAnimation: true,
        formatter: '{value}%',
        color: '#3C4446',
        fontSize: 30,
        fontWeight: '700',
      },
      data: [
        {
          value: 80,
        }
      ]
    }
  ]
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
