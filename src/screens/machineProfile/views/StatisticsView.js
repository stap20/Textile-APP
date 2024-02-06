// LayoutManager.js
import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {statisticsViewStyle} from '@styles/screens/machineProfile';
import {MachineProfileSummaryCard, Chart, MachineTable} from '@components';
import {MachineProfileHandler} from '@services/graphql';
import {prepareDuration} from '@utils';

export default function StatisticsView({machineNumber}) {
  const {theme} = useTheme();
  const styles = statisticsViewStyle(theme);

  const machineSummaryData =
    MachineProfileHandler.Statistics.getMachineSummary(machineNumber);
  const machineProductionData =
    MachineProfileHandler.Statistics.getProductionData(machineNumber);
  const machinesStopsData =
    MachineProfileHandler.Statistics.getMachinesStopsData(machineNumber);

  const machineSpeedData =
    MachineProfileHandler.Statistics.getMachineSpeedData(machineNumber);

  const machineProductionChartOption = {
    xAxis: {
      name: 'Days',
      type: 'category',
      data: machineProductionData.xAxis,
    },
    yAxis: {
      name: 'Production (kg/hr)',
      type: 'value',
    },
    data: {
      max_prod: {
        name: 'Max Production',
        data: machineProductionData.maxProdData,
        smooth: false,
      },
      min_prod: {
        name: 'Min Production',
        data: machineProductionData.minProdData,
        smooth: false,
      },
    },
  };

  const machineProductionCompareChartOption = {
    xAxis: {
      name: 'Days',
      type: 'category',
      data: machineProductionData.xAxis,
    },
    yAxis: {
      name: 'Production (kg/hr)',
      type: 'value',
    },
    data: {
      max_prod: {
        name: 'Max Production',
        data: machineProductionData.maxProdData,
        smooth: false,
      },
      min_prod: {
        name: 'Min Production',
        data: machineProductionData.minProdData,
        smooth: false,
      },
      max_ideal_prod: {
        name: 'Max Ideal Production',
        data: machineProductionData.maxIdealProdData,
        smooth: false,
      },
      min_ideal_prod: {
        name: 'Min Ideal Production',
        data: machineProductionData.minIdealProdData,
        smooth: false,
      },
    },
  };

  const totalStopDuration =
    machineSummaryData.totalDurationMinutes -
    machineSummaryData.workingDurationMinutes;

  const machineStopsDurationChartOption = machinesStopsData.map((item, idx) => {
    const {duration, name, id} = item;
    const percentage = ((duration / totalStopDuration) * 100).toFixed(2);

    return {value: percentage < 1 ? 1 : percentage, name, id, duration};
  });

  const machineStopsNumberChartOption = {
    xAxis: {
      name: 'Stops',
      type: 'category',
      data: machinesStopsData.map(item => item.name),
    },
    yAxis: {
      name: 'No. of stops',
      type: 'value',
    },
    data: {
      rolls: {
        name: 'Stop',
        data: machinesStopsData.map((item, idx) => ({
          value: item.number,
          itemStyle: {color: theme.filterSymbolColors[idx]},
        })),
      },
    },
  };

  const machineYarnSpeedChartOption = {
    xAxis: {
      name: 'Months',
      type: 'category',
      data: machineSpeedData.xAxis,
    },
    yAxis: {
      name: 'Speed (rpm)',
      type: 'value',
    },
    data: {
      max_prod: {
        name: 'Max speed',
        data: machineSpeedData.maxYarnSpeed,
        smooth: false,
      },
      min_prod: {
        name: 'Min Speed',
        data: machineSpeedData.minYarnSpeed,
        smooth: false,
      },
    },
  };

  const machineSpeedChartOption = {
    xAxis: {
      name: 'Months',
      type: 'category',
      data: machineSpeedData.xAxis,
    },
    yAxis: {
      name: 'Speed (rpm)',
      type: 'value',
    },
    data: {
      max_prod: {
        name: 'Max speed',
        data: machineSpeedData.maxMachineSpeed,
        smooth: false,
      },
      min_prod: {
        name: 'Min Speed',
        data: machineSpeedData.minMachineSpeed,
        smooth: false,
      },
    },
  };

  const productionDurationChart = [
    {
      value: machineSummaryData.workingDurationMinutes,
      name: 'Working Duration',
      id: 'workingDurationMinutes',
    },
    {
      value: machineSummaryData.stopDurationMinutes,
      name: 'Stop Duration',
      id: 'stopDurationMinutes',
    },
    {
      value: machineSummaryData.idleDurationMinutes,
      name: 'Idle Duration',
      id: 'idleDurationMinutes',
    },
  ];

  const header = [
    {key: 'param', title: 'Param'},
    {key: 'value', title: 'Value'},
  ];

  const data = [
    {param: 'Yarn Count Ne', value: 20},
    {param: 'EFF%', value: 76},
    {param: 'Feeders', value: 96},
    {param: 'Needles/Cylinder', value: 2256},
    {param: 'Fabric', value: 20},
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.machineSummaryContainer}>
        <MachineProfileSummaryCard {...machineSummaryData} />
      </View>

      <View style={styles.chartsRowContainer}>
        <View style={styles.largeColumn}>
          <Chart
            title={'Production Rate'}
            config={machineProductionChartOption}
            type={'line'}
          />
        </View>
        <View style={styles.smallColumn}>
          <Chart
            title={'Machine Stops Duration'}
            config={machineStopsDurationChartOption}
            type={'pie'}
            isClickableFilter={false}
            display={({name, duration}) => {
              return `${name} \n\n ${prepareDuration(duration)}`;
            }}
          />
        </View>
      </View>

      <View style={styles.chartsRowContainer}>
        <View style={styles.largeColumn}>
          <Chart
            title={'Production VS Ideal Production'}
            config={machineProductionCompareChartOption}
            type={'line'}
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

      <View style={styles.chartsRowContainerSmall}>
        <View style={styles.largeColumn}>
          <Chart
            title={'Machine Speed'}
            config={machineSpeedChartOption}
            type={'line'}
          />
        </View>
        <View style={styles.smallColumn}>
          <Chart
            title={'Machine Speed'}
            config={{value: machineSummaryData.machineSpeed, maxValue: 40}}
            type={'guage'}
          />
        </View>
      </View>

      <View style={styles.chartsRowContainerSmall}>
        <View style={styles.largeColumn}>
          <Chart
            title={'Feeder Speed'}
            config={machineYarnSpeedChartOption}
            type={'line'}
          />
        </View>
        <View style={styles.smallColumn}>
          <Chart
            title={'Feeder Speed'}
            config={{value: machineSummaryData.feederSpeed, maxValue: 2000}}
            type={'guage'}
          />
        </View>
      </View>

      <View style={styles.chartsRowContainerSmall}>
        <View style={styles.largeColumn}>
          <Chart
            title={'Machine Stops'}
            config={machineStopsNumberChartOption}
            type={'bar'}
          />
        </View>
        <View style={styles.smallColumn}>
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Machine Params</Text>
            </View>

            <MachineTable
              data={data}
              headerList={header}
              isAction={false}
              isClickable={false}
              isScrollable={false}
              rowColor={theme.backgroundColors.summaryTableRow}
              rowEvenColor={theme.backgroundColors.summaryEvenTableRow}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
