// LayoutManager.js
import React from 'react';
import {View} from 'react-native';
import Sidebar from './Sidebar';
import LocalizationManager from '@localization/LocalizationManager'; // Import the LocalizationManager
import {useTheme} from '@theme/ThemeProvider';
import layoutStyles from '@styles/layoutStyles';

export default function LayoutManager({navigation, descriptors, state}) {
  const {theme, toggleTheme} = useTheme();
  const styles = layoutStyles(theme);

  const descriptor = descriptors[state.routes[state.index].key];
  const ActiveScreen = () => descriptor.render();

  const changeLanguage = language => {
    LocalizationManager.setCurrentLanguage(language);
  };
  return (
    <View style={styles.container}>
      <View style={styles.sidebarContainer}>
        <Sidebar {...{changeLanguage, toggleTheme, navigation, descriptors}} />
      </View>

      <View style={styles.mainContainer}>
        <ActiveScreen />
      </View>
    </View>
  );
}
