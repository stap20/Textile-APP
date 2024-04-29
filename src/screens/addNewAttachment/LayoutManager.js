// LayoutManager.js
import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/attachments';
import Header from './Header';
import FormView from './views';

export default function LayoutManager({type, onSave, onCancel}) {
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
        <FormView type={type} onSave={onSave} onCancel={onCancel} />
      </View>
    </View>
  );
}
