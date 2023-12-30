// Header.js
import React from 'react';
import {View, Text} from 'react-native';
import {headerStyles} from '@styles/screens/orders';
import {FilterSwitchComponent, TabSwitchComponent} from '@components';

export default function Header(props) {
  const {
    theme,
    activeTab,
    setActiveTab,
    activeFilterTab,
    setActiveFilterTab,
    tabs,
    filters,
  } = props;
  const styles = headerStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders</Text>
      <View style={styles.tabSwitchContainer}>
        <TabSwitchComponent
          items={tabs}
          activeIndex={activeTab}
          activeOnPress={setActiveTab}
        />
      </View>
      <View style={styles.filterContainer}>
        <FilterSwitchComponent
          items={filters}
          activeIndex={activeFilterTab}
          activeOnPress={setActiveFilterTab}
        />
      </View>
    </View>
  );
}
