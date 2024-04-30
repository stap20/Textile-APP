// LayoutManager.js
import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/addNewProfile';
import Header from './Header';
import FormView from './FormView';

export default function LayoutManager({onSave, onCancel}) {
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
        <FormView onSave={onSave} onCancel={onCancel} />
      </View>
    </View>
  );
}
