// Header.js
import React from 'react';
import {View, Text} from 'react-native';
import {headerStyles} from '@styles/screens/addNewUser';

export default function Header(props) {
  const {theme} = props;
  const styles = headerStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New User</Text>
    </View>
  );
}
