// LayoutManager.js
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/users';
import Header from './Header';
import {UsersHandler} from '@services/graphql';
import CardView from './CardView';

export default function LayoutManager() {
  const {theme, toggleTheme} = useTheme();
  const styles = layoutStyles(theme);

  const [data, setData] = useState([]);

  useEffect(() => {
    const response = UsersHandler.Users.getUsersData();

    setData(JSON.parse(JSON.stringify(response)));
  }, []);

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
        <CardView data={data} />
      </View>
    </View>
  );
}
