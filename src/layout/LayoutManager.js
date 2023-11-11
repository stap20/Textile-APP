// LayoutManager.js
import React, {useState} from 'react';
import {View} from 'react-native';
import Sidebar from './Sidebar';
import SidebarScreen from '@screens/SidebarScreen'; // Import your screen components
import HomeScreen from '@screens/HomeScreen';
import LocalizationManager from '@localization/LocalizationManager'; // Import the LocalizationManager
import {useTheme} from '@theme/ThemeProvider';
import layoutStyles from '@styles/layoutStyles';

const LayoutManager = () => {
  const [selectedScreen, setSelectedScreen] = useState('Home');
  const {theme, toggleTheme, themeStyles} = useTheme();

  const styles = layoutStyles(themeStyles);

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
        <Sidebar
          selectScreen={selectScreen}
          toggleLayout={toggleLayout}
          toggleTheme={toggleTheme}
        />

        {/* <AppNavigation /> */}
      </View>

      <View style={styles.mainContainer}>
        {selectedScreen === 'Side' && <SidebarScreen />}
        {selectedScreen === 'Home' && <HomeScreen />}
        {/* Add more screens as needed */}
      </View>
    </View>
  );
};

export default LayoutManager;
