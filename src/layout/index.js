// LayoutManager.js
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Sidebar from './Sidebar';
import SidebarScreen from '@screens/sidebar/SidebarScreen'; // Import your screen components
import HomeScreen from '@screens/sidebar/HomeScreen';
import LocalizationManager from '@localization/LocalizationManager'; // Import the LocalizationManager
import { useTheme } from '@theme/ThemeProvider';

const LayoutManager = () => {
  const [selectedScreen, setSelectedScreen] = useState('Home');
  const { theme, toggleTheme, themeStyles } = useTheme();
  const styles = sidebarStyles(themeStyles);

  const changeLanguage = language => {
    LocalizationManager.setCurrentLanguage(language);
  };

  const toggleLayout = () => {
    const isRTL = !LocalizationManager.isRTLLayout();
    LocalizationManager.setRTLLayout(isRTL);
    changeLanguage(
      LocalizationManager.getCurrentLanguage() === 'ar' ? 'en' : 'ar',
    );
  };

  const selectScreen = screenName => {
    setSelectedScreen(screenName);
  };

  return (
    <View style={[styles.container, styles.ltrContainer]}>
      <View style={styles.sidebarContainer}>
        <Sidebar selectScreen={selectScreen} toggleLayout={toggleLayout} toggleTheme={toggleTheme}/>
      </View>

      <View style={styles.mainContainer}>
        {selectedScreen === 'Side' && <SidebarScreen />}
        {selectedScreen === 'Home' && <HomeScreen />}
        {/* Add more screens as needed */}
      </View>
    </View>
  );
};

const sidebarStyles = (theme) => {
  return StyleSheet.create({
    container: {
      height: '100%',
    },
    ltrContainer: {
      flexDirection: 'row', // Left-to-Right (LTR) layout
    },
    rtlContainer: {
      flexDirection: 'row-reverse', // Right-to-Left (RTL) layout
    },
    mainContainer: {
      flex: 1, // Take up remaining space in the container
    },
    sidebarContainer: {
      width: 160,
      backgroundColor: theme.colors.background,
    },
  });
};




export default LayoutManager;
