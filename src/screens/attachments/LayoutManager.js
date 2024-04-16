// LayoutManager.js
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/attachments';
import Header from './Header';
import {MachineHandler} from '@services/graphql';
import CardView from './CardView';

const filters = [
  {title: 'Feeder', id: 'feeder'},
  {title: 'LFA', id: 'lfa'},
]; // Add more filters as needed

export default function LayoutManager() {
  const {theme, toggleTheme} = useTheme();
  const styles = layoutStyles(theme);

  const [data, setData] = useState([]);
  const [activeFilterTab, setActiveFilterTab] = useState(0);

  useEffect(() => {
    const response = MachineHandler.Machine.getMachinesData(
      filters[activeFilterTab].id,
    );

    setData(JSON.parse(JSON.stringify(response)));
  }, [activeFilterTab]);

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
        <CardView data={data} filterName={filters[activeFilterTab].title} />
      </View>
    </View>
  );
}
