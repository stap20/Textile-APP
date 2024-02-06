// Header.js
import React from 'react';
import {View, Text} from 'react-native';
import {headerStyles} from '@styles/screens/machineProfile';
import {FilterSwitchComponent} from '@components';

export default function Header(props) {
  const {theme, activeFilterTab, setActiveFilterTab, filters} = props;
  const styles = headerStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Machine Profile</Text>
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
