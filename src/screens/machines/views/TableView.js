// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {tableViewStyle} from '@styles/screens/machines';
import {Icon, MachineTable} from '@components';

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

export default function TableView({data}) {
  const {theme} = useTheme();
  const styles = tableViewStyle(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addMachineBtn}>
        <Icon iconName={'table-view-add-square'} />
        <Text style={styles.addMachineText}>Add Machine</Text>
      </TouchableOpacity>

      <View style={styles.tableContainer}>
        <MachineTable data={data} headerList={header} />
      </View>
    </View>
  );
}
