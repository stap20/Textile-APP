// Header.js
import React from 'react';
import {View, Text} from 'react-native';
import {headerStyles} from '@styles/screens/profiles';

export default function Header({theme}) {
  const styles = headerStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profiles</Text>
    </View>
  );
}
