// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyle} from '@styles/components/table';

export default function Table({data}) {
  const {theme} = useTheme();
  const styles = layoutStyle(theme);

  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  const renderHeader = () => {
    return (
      <View style={styles.headerRow}>
        {columns.map(column => (
          <Text key={column} style={styles.headerCell}>
            {column}
          </Text>
        ))}
      </View>
    );
  };

  const renderItem = ({item}) => {
    const progress = parseInt((item.finishedQuan / item.totalQuan) * 100);

    item.progress = progress;

    delete item.finishedQuan;
    delete item.totalQuan;

    item.startDate =
      item.startDate.getDate() +
      ' / ' +
      (item.startDate.getMonth() + 1) +
      ' / ' +
      item.startDate.getFullYear();

    item.endDate =
      item.endDate.getDate() +
      ' / ' +
      (item.endDate.getMonth() + 1) +
      ' / ' +
      item.endDate.getFullYear();

    item.status = item.status.state;
    console.log(item);
    return (
      <View style={styles.dataRow}>
        {columns.map(column => (
          <Text key={column} style={styles.dataCell}>
            {item[column]}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
