import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {tableViewStyle} from '@styles/screens/machineProfile';
import {MachineTable} from '@components';
import {MachineProfileHandler} from '@services/graphql';

const header = [
  {key: 'orderNumber', title: 'Order Number'},
  {key: 'duration', title: 'Stop Duration'},
  {key: 'progress', title: 'Progress'},
  {key: 'status', title: 'Stop Name'},
];

export default function MachinesStopsView({machineNumber}) {
  const {theme} = useTheme();
  const styles = tableViewStyle(theme);

  const data = MachineProfileHandler.Machine.getMachineStopsData(machineNumber);

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
