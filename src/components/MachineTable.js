// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import machineTableStyle from '@styles/components/machineTableStyle';
import StatusChip from './StatusChip';
import ProgressBar from './ProgressBar';
import Icon from './Icon';

export default function MachineTable({
  data,
  headerList,
  isAction = true,
  isClickable = true,
}) {
  const {theme} = useTheme();
  const styles = machineTableStyle(theme);

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
    const Wrapper = ({children, isClickable, onPress}) => {
      return isClickable ? (
        <TouchableOpacity
          style={[
            styles.dataRow,
            {backgroundColor: index % 2 == 0 ? '#F7F6FE' : 'white'},
            index + 1 == data.length ? styles.dataRowLast : {},
          ]}>
          {children}
        </TouchableOpacity>
      ) : (
        <View
          style={[
            styles.dataRow,
            {backgroundColor: index % 2 == 0 ? '#F7F6FE' : 'white'},
            index + 1 == data.length ? styles.dataRowLast : {},
          ]}>
          {children}
        </View>
      );
    };

    return (
      <Wrapper isClickable={isClickable}>
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

          if (key === 'efficiency') {
            var currentColor = theme.colors.goodEfficiency;

            if (item[key] <= 70 && item[key] > 40) {
              currentColor = theme.colors.normalEfficiency;
            } else if (item[key] <= 40) {
              currentColor = theme.colors.dangerEfficiency;
            }

            return (
              <View key={header.key} style={styles.dataCellContainer}>
                <View style={styles.progressBarContainer}>
                  <Text style={[styles.progressText, {color: currentColor}]}>
                    {item[key]}%
                  </Text>
                  <ProgressBar progress={item[key]} color={currentColor} />
                </View>
              </View>
            );
          }

          if (key === 'speed') {
            return (
              <View key={header.key} style={styles.dataCellContainer}>
                <Text style={styles.dataCellText}>{item[key]} rpm</Text>
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
      </Wrapper>
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
