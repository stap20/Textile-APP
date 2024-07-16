// LayoutManager.js
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/dashboard';
import Header from './Header';
import DashboardView from './DashboardView';

export default function LayoutManager() {
  const {theme, toggleTheme} = useTheme();
  const styles = layoutStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          {...{
            theme,
            toggleTheme,
          }}
        />
      </View>
      <View style={styles.mainContainer}>
        <DashboardView />
      </View>
    </View>
  );
}
