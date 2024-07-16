import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import '@localization/i18n';

import LocalizationManager from '@localization/LocalizationManager'; // Import the LocalizationManager
import {ThemeProvider} from '@theme/ThemeProvider';
import {MainNavigation} from '@navigation';

import Toast from 'react-native-toast-message';

SystemNavigationBar.navigationHide();
function App() {
  useEffect(() => {
    LocalizationManager.initialize();
  }, []);

  return (
    <ThemeProvider>
      <StatusBar hidden />
      <SafeAreaView>
        <MainNavigation />
      </SafeAreaView>
      <Toast autoHide={true} />
    </ThemeProvider>
  );
}

export default App;
