// LayoutManager.js
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/machineProfile';
import Header from './Header';
import {StatisticsView, MachineOrdersView, MachinesStopsView} from './views';

const filters = [
  {title: 'Statistics', id: 'statistics', view: StatisticsView},
  {title: 'Stops History', id: 'stopHistory', view: MachinesStopsView},
  {title: 'Order History', id: 'orderHistory', view: MachineOrdersView},
]; // Add more filters as needed

export default function LayoutManager({orderNumber}) {
  const {theme, toggleTheme} = useTheme();
  const styles = layoutStyles(theme);

  const [activeFilterTab, setActiveFilterTab] = useState(0);

  const CurrentView = filters[activeFilterTab].view;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          {...{
            theme,
            toggleTheme,
            activeFilterTab,
            setActiveFilterTab,
            filters,
          }}
        />
      </View>
      <View style={styles.mainContainer}>
        <CurrentView orderNumber={orderNumber} />
      </View>
    </View>
  );
}
