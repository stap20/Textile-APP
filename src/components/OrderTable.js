// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {useNavigation} from '@react-navigation/native';
import orderTableStyle from '@styles/components/orderTableStyle';
import StatusChip from './StatusChip';
import ProgressBar from './ProgressBar';
import Icon from './Icon';

export default function OrderTable({
  data,
  headerList,
  isAction = true,
  isClickable = true,
}) {
  const {theme} = useTheme();
  const styles = orderTableStyle(theme);
  const navigation = useNavigation();

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
          navigation.navigate('orders', {
            screen: 'order_profile_screen',
            params: {orderNumber: item.orderNumber},
          });
        }}
        style={[
          styles.dataRow,
          {backgroundColor: index % 2 == 0 ? '#F7F6FE' : 'white'},
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
