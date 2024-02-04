import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {tableViewStyle} from '@styles/screens/orderProfile';
import {MachineTable} from '@components';
import {OrderProfileHandler} from '@services/graphql';

const header = [
  {key: 'machineName', title: 'Machine Name'},
  {key: 'machineNumber', title: 'Machine Number'},
  {key: 'orderNumber', title: 'Order Number'},
  {key: 'speed', title: 'Spead Rate'},
  {key: 'workingHour', title: 'Working Hours'},
  {key: 'stoppedHour', title: 'Stop Hours'},
  {key: 'numberOfRoll', title: 'No. of Rolls'},
  {key: 'efficiency', title: 'Efficiency'},
  {key: 'progress', title: 'Progress'},
  {key: 'status', title: 'Status'},
];

export default function MachinesStopsView({orderNumber}) {
  const {theme} = useTheme();
  const styles = tableViewStyle(theme);

  const data = OrderProfileHandler.Machines.getMachinesStopsData(orderNumber);

  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <MachineTable
          data={data}
          headerList={header}
          isAction={false}
          isClickable={false}
        />
      </View>
    </View>
  );
}
