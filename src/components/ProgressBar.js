import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import progressBarStyle from '@styles/components/progressBarStyle';

export default function ProgressBar({progress}) {
  const {theme} = useTheme();
  const styles = progressBarStyle(theme);

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, {width: `${progress}%`}]} />
    </View>
  );
}
