import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import '@localization/i18n';

import LocalizationManager from '@localization/LocalizationManager'; // Import the LocalizationManager
import {ThemeProvider} from '@theme/ThemeProvider';
import {MainNavigation} from '@navigation';

import Toast from 'react-native-toast-message';
import {PopUpModal} from '@components';

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
      <PopUpModal status={true} />
    </ThemeProvider>
  );
}

export default App;
