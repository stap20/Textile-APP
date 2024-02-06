// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
  isScrollable = true,
  rowColor = null,
  rowEvenColor = null,
}) {
  const {theme} = useTheme();
  const styles = machineTableStyle(theme);
  const navigation = useNavigation();

  const renderHeader = () => {
    return (
      <View
        style={[styles.headerRow, rowColor ? {backgroundColor: rowColor} : {}]}>
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
    const Wrapper = ({children, isClickable, style, onPress}) => {
      return isClickable ? (
        <TouchableOpacity style={style} onPress={onPress}>
          {children}
        </TouchableOpacity>
      ) : (
        <View style={style}>{children}</View>
      );
    };

    return (
      <Wrapper
        onPress={() => {
          navigation.navigate('machines', {
            screen: 'machine_profile_screen',
            params: {machineNumber: item.machineNumber},
          });
        }}
        style={[
          styles.dataRow,
          {
            backgroundColor:
              index % 2 == 0 ? rowEvenColor ?? '#F7F6FE' : rowColor ?? 'white',
          },
          rowColor,
          index + 1 == data.length ? styles.dataRowLast : {},
        ]}
        isClickable={isClickable}>
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
        scrollEnabled={isScrollable}
      />
    </View>
  );
}
