import React, {useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {dashboardViewStyle} from '@styles/screens/dashboard';

export default function DashboardView() {
  const {theme, toggleTheme} = useTheme();
  const styles = dashboardViewStyle(theme);

  return (
    <View style={styles.container}>
    <View style={{flex: 1}}>
    <FlatList
    style={{zIndex: 5}}
    // contentContainerStyle={{padding: 12}}
        data={['1', '2', '3']}
        renderItem={({item}) => <View style={styles.cardContainer}>
              <Text>{item}</Text>
          </View>}
        horizontal={true}
/>
    </View>
    <View style={{flex: 1}}>
    <View style={styles.card2Container}>
              <Text>{'test'}</Text>
          </View>
    </View>
    </View>
  );
}
