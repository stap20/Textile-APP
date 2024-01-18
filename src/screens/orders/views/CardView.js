// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {cardViewStyle} from '@styles/screens/orders';
import {Icon, OrderCard} from '@components';

export default function CardView() {
  const {theme} = useTheme();
  const styles = cardViewStyle(theme);

  const data = [
    {id: 'static', text: 'Static', static: true},
    {id: 'dynamic1', text: 'Dynamic 1', static: false},
    {id: 'dynamic2', text: 'Dynamic 2', static: false},
    {id: 'dynamic3', text: 'Dynamic 1', static: false},
    {id: 'dynamic4', text: 'Dynamic 2', static: false},
    {id: 'dynamic5', text: 'Dynamic 1', static: false},
    {id: 'dynamic6', text: 'Dynamic 2', static: false},
    {id: 'dynamic7', text: 'Dynamic 1', static: false},
    {id: 'dynamic8', text: 'Dynamic 2', static: false},
    // Add more dynamic items as needed
  ];

  const AddBtn = () => {
    return (
      <View style={styles.addOrderContainer}>
        <Icon iconName={'add-square'} />
        <Text style={styles.addOrderText}>Add Order</Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return item.static ? <AddBtn /> : <OrderCard />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={true}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
