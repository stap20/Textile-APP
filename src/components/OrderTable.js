// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import orderTableStyle from '@styles/components/orderTableStyle';
import StatusChip from './StatusChip';
import ProgressBar from './ProgressBar';
import Icon from './Icon';

export default function OrderTable({data, headerList, isAction = true}) {
  const {theme} = useTheme();
  const styles = orderTableStyle(theme);

  const renderHeader = () => {
    return (
      <View style={styles.headerRow}>
        {headerList.map((header, idx) => {
          return (
            <Text key={header.key} style={styles.headerCell}>
              {header.title}
            </Text>
          );
        })}
        {isAction ? <Text style={styles.actionHeaderText}>Action</Text> : null}
      </View>
    );
  };

  const renderRow = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          styles.dataRow,
          {backgroundColor: index % 2 == 0 ? '#F7F6FE' : 'white'},
          index + 1 == data.length ? styles.dataRowLast : {},
        ]}>
        {headerList.map((header, idx) => {
          const key = header.key;

          if (key === 'status') {
            return (
              <View key={header.key} style={styles.dataCellContainer}>
                <StatusChip status={item[key]} size={'md'} />
              </View>
            );
          }

          if (key === 'progress') {
            return (
              <View key={header.key} style={styles.dataCellContainer}>
                <View style={styles.progressBarContainer}>
                  <Text style={styles.progressText}>{item[key]}%</Text>
                  <ProgressBar progress={item[key]} />
                </View>
              </View>
            );
          }

          return (
            <View key={header.key} style={styles.dataCellContainer}>
              <Text style={styles.dataCellText}>{item[key]}</Text>
            </View>
          );
        })}
        {isAction ? (
          <View style={styles.actionContainer}>
            <TouchableOpacity>
              <Icon iconName={'edit-crud'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon iconName={'trash-crud'} />
            </TouchableOpacity>
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      <FlatList
        data={data}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
