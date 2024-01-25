// LayoutManager.js
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/orders';

export default function TableView() {
  const {theme, toggleTheme} = useTheme();
  const styles = layoutStyles(theme);

  const [activeTab, setActiveTab] = useState(0);
  const [activeFilterTab, setActiveFilterTab] = useState(0);

  return (
    <View style={styles.container}>
    </View>
  );
}
