// LayoutManager.js
import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/machines';
import Header from './Header';
import {CardView, TableView} from './views';
import {MachineHandler} from '@services/graphql';

const tabs = [
  {title: 'Table', id: 'table', view: TableView},
  {title: 'Cards', id: 'card', view: CardView},
]; // Add more tabs as needed
const filters = [
  {title: 'All', id: 'all'},
  {title: 'Working', id: 'working'},
  {title: 'Stopping', id: 'stop'},
]; // Add more filters as needed

const data = MachineHandler.Machine.getMachinesData();

export default function LayoutManager() {
  const {theme, toggleTheme} = useTheme();
  const styles = layoutStyles(theme);

  const [activeTab, setActiveTab] = useState(0);
  const [activeFilterTab, setActiveFilterTab] = useState(0);

  const CurrentView = tabs[activeTab].view;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          {...{
            theme,
            toggleTheme,
            activeTab,
            setActiveTab,
            activeFilterTab,
            setActiveFilterTab,
            tabs,
            filters,
          }}
        />
      </View>
      <View style={styles.mainContainer}>
        <CurrentView data={data} />
      </View>
    </View>
  );
}
