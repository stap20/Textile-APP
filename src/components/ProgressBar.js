import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import progressBarStyle from '@styles/components/progressBarStyle';

export default function ProgressBar({progress, color = null, style = {}}) {
  const {theme} = useTheme();
  const styles = progressBarStyle(theme);

  return (
    <View style={[styles.container,style]}>
      <View
        style={[
          styles.progressBar,
          {width: `${progress}%`},
          color != null ? {backgroundColor: color} : null,
        ]}
      />
    </View>
  );
}
