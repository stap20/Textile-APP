import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {tableViewStyle} from '@styles/screens/machineProfile';
import {MachineTable} from '@components';
import {MachineProfileHandler} from '@services/graphql';

const header = [
  {key: 'orderNumber', title: 'Order Number'},
  {key: 'startDate', title: 'Start'},
  {key: 'endDate', title: 'End'},
  {key: 'workingHour', title: 'Working Hours'},
  {key: 'stoppedHour', title: 'Stop Hours'},
  {key: 'numberOfRoll', title: 'No. of Rolls'},
  {key: 'efficiency', title: 'Efficiency'},
];

export default function MachinesView({machineNumber}) {
  const {theme} = useTheme();
  const styles = tableViewStyle(theme);

  const data = MachineProfileHandler.Machine.getOrdersHistory(machineNumber);

  console.log(data)
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
