// LayoutManager.js
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/orders';
import Header from './Header';

const tabs = [{title: 'Table'}, {title: 'Cards'}]; // Add more tabs as needed
const filters = [
  {title: 'All'},
  {title: 'Finished'},
  {title: 'Pending'},
  {title: 'In Progress'},
]; // Add more filters as needed

export default function LayoutManager() {
  const {theme, toggleTheme} = useTheme();
  const styles = layoutStyles(theme);

  const [activeTab, setActiveTab] = useState(0);
  const [activeFilterTab, setActiveFilterTab] = useState(0);

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
        <Text>f</Text>
      </View>
    </View>
  );
}
