// LayoutManager.js
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/profiles';
import Header from './Header';
import CardView from './CardView';

export default function LayoutManager({fetchData, deleteMachineProfile}) {
  const {theme, toggleTheme} = useTheme();
  const styles = layoutStyles(theme);

  const [data, setData] = useState([]);

  const dataFetcher = () => {
    fetchData().then(res => {
      setData(JSON.parse(JSON.stringify(res)));
    });
  };

  useEffect(() => {
    dataFetcher();
  }, []);

  const onDeleteMachineProfile = async id => {
    const res = await deleteMachineProfile(id);

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
          }}
        />
      </View>
      <View style={styles.mainContainer}>
        <CardView
          data={data}
          deleteMachineProfile={onDeleteMachineProfile}
        />
      </View>
    </View>
  );
}
