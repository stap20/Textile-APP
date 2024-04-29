// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@theme/ThemeProvider';
import {tableViewStyle} from '@styles/screens/orders';
import {Icon, OrderTable} from '@components';

const header = [
  {key: 'orderNumber', title: 'Order Number'},
  {key: 'startDate', title: 'Start'},
  {key: 'endDate', title: 'End'},
  {key: 'progressDetails', title: 'No. of Rolls'},
  {key: 'workingHour', title: 'Working Hours'},
  {key: 'stoppedHour', title: 'Stop Hours'},
  {key: 'numberOfMachines', title: 'Machines Number'},
  {key: 'progress', title: 'Progress'},
  {key: 'status', title: 'Status'},
];

export default function TableView({data}) {
  const {theme} = useTheme();
  const styles = tableViewStyle(theme);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addOrderBtn}
        onPress={() => {
          navigation.navigate('orders', {
            screen: 'add_order_screen',
          });
        }}>
        <Icon iconName={'table-view-add-square'} />
        <Text style={styles.addOrderText}>Add Order</Text>
      </TouchableOpacity>

      <View style={styles.tableContainer}>
        <OrderTable data={data} headerList={header} />
      </View>
    </View>
  );
}
