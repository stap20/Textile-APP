/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import LayoutManager from '@layout/index';
import '@localization/i18n';
import LocalizationManager from '@localization/LocalizationManager'; // Import the LocalizationManager
import { ThemeProvider } from '@theme/ThemeProvider';

function App() {
  useEffect(() => {
    LocalizationManager.initialize();
  }, []);

  return (
    <ThemeProvider>
      <SafeAreaView>
        <LayoutManager />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
