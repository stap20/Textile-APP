// Header.js
import React from 'react';
import {View, Text} from 'react-native';
import {headerStyles} from '@styles/screens/addNewProfile';

export default function Header(props) {
  const {theme} = props;
  const styles = headerStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Profile</Text>
    </View>
  );
}
