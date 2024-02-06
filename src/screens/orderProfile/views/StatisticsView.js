// LayoutManager.js
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {statisticsViewStyle} from '@styles/screens/orderProfile';
import {OrderProfileSummaryCard, Chart} from '@components';
import {OrderProfileHandler} from '@services/graphql';
import {prepareDuration} from '@utils';

export default function StatisticsView({orderNumber}) {
  const {theme} = useTheme();
  const styles = statisticsViewStyle(theme);

  const orderSummaryData =
    OrderProfileHandler.Statistics.getOrderSummary(orderNumber);
  const orderProductionData =
    OrderProfileHandler.Statistics.getProductionData(orderNumber);
  const machinesProductionChart =
    OrderProfileHandler.Statistics.getMachinesProductionData(orderNumber);

  const machinesEfficiencyData =
    OrderProfileHandler.Statistics.getMachinesEfficiencyData(orderNumber);

  const orderProductionChartOption = {
    xAxis: {
      name: 'Days',
      type: 'category',
      data: orderProductionData.xAxis,
    },
    yAxis: {
      name: 'Total Rolls',
      type: 'value',
    },
    data: {
      rolls: {
        name: 'Total Rolls',
        data: orderProductionData.data,
        smooth: false,
      },
    },
  };

  const productionDurationChart = [
    {
      value: orderSummaryData.workingDurationMinutes,
      name: 'Working Duration',
      id: 'workingDurationMinutes',
    },
    {
      value: orderSummaryData.stopDurationMinutes,
      name: 'Stop Duration',
      id: 'stopDurationMinutes',
    },
    {
      value: orderSummaryData.idleDurationMinutes,
      name: 'Idle Duration',
      id: 'idleDurationMinutes',
    },
  ];

  const machinesEfficiencyChart = {
    xAxis: {
      name: 'Machines',
      type: 'category',
      data: machinesEfficiencyData.xAxis,
    },
    yAxis: {
      name: 'Efficiency',
      type: 'value',
    },
    data: {
      rolls: {
        name: 'Efficiency',
        data: machinesEfficiencyData.data,
      },
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.orderSummaryContainer}>
        <OrderProfileSummaryCard {...orderSummaryData} />
      </View>

      <View style={styles.chartsRowContainer}>
        <View style={styles.largeColumn}>
          <Chart
            title={'Production'}
            config={orderProductionChartOption}
            type={'line'}
          />
        </View>
        <View style={styles.smallColumn}>
          <Chart
            title={'Machines Production'}
            config={machinesProductionChart}
            type={'pie'}
            isClickableFilter={false}
            display={({value, name}) => {
              return `  ${name} \n\n ${value} Roll`;
            }}
          />
        </View>
      </View>

      <View style={styles.chartsRowContainer}>
        <View style={styles.largeColumn}>
          <Chart
            title={'Machines Efficiency'}
            config={machinesEfficiencyChart}
            type={'bar'}
          />
        </View>
        <View style={styles.smallColumn}>
          <Chart
            title={'Production Duration'}
            config={productionDurationChart}
            type={'pie'}
            isClickableFilter={false}
            display={({value, name}) => {
              return `${name} \n\n ${prepareDuration(value)}`;
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
