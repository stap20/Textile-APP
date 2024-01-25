// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {tableViewStyle} from '@styles/screens/orders';
import {Icon, Table} from '@components';

export default function TableView({data}) {
  const {theme} = useTheme();
  const styles = tableViewStyle(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addOrderBtn}>
        <Icon iconName={'table-view-add-square'} />
        <Text style={styles.addOrderText}>Add Order</Text>
      </TouchableOpacity>

      <View style={styles.tableContainer}>
        <Table
          data={data}
        />
      </View>
    </View>
  );
}
