// LayoutManager.js
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/attachments';
import Header from './Header';

import CardView from './CardView';

const filters = [
  {title: 'Feeder', id: 'feeder'},
  {title: 'LFA', id: 'lfa'},
]; // Add more filters as needed

export default function LayoutManager({fetchData, deleteAttachment}) {
  const {theme, toggleTheme} = useTheme();
  const styles = layoutStyles(theme);

  const [data, setData] = useState([]);
  const [activeFilterTab, setActiveFilterTab] = useState(0);

  const dataFetcher = () => {
    fetchData(filters[activeFilterTab].id).then(res => {
      setData(JSON.parse(JSON.stringify(res)));
    });
  };

  useEffect(() => {
    dataFetcher();
  }, [activeFilterTab]);

  const onDeleteAttachment = async (attachmentType, id) => {
    const res = await deleteAttachment(attachmentType, id);

    if (res) {
      dataFetcher();
    }

    return res;
  };

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
        <CardView
          data={data}
          filter={filters[activeFilterTab]}
          deleteAttachment={onDeleteAttachment}
        />
      </View>
    </View>
  );
}
