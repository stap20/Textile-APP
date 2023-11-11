/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';

import LayoutManager from '@layout/LayoutManager';
import '@localization/i18n';
import LocalizationManager from '@localization/LocalizationManager'; // Import the LocalizationManager
import {ThemeProvider} from '@theme/ThemeProvider';
import {createMyNavigator} from './navigation/TabNavigator';
import HomeScreen from '@screens/HomeScreen';
import SidebarScreen from '@screens/SidebarScreen';
import {NavigationContainer} from '@react-navigation/native';

const My = createMyNavigator();

function App() {
  useEffect(() => {
    LocalizationManager.initialize();
  }, []);

  return (
    <ThemeProvider>
      <SafeAreaView>
        <View style={{backgroundColor: 'red', height: '100%'}}>
          <NavigationContainer>
            <My.Navigator>
              <My.Screen
                name="Home"
                component={HomeScreen}
                options={{icon: 'home', tabName: 'Home'}}
              />
              <My.Screen
                name="Feed"
                component={SidebarScreen}
                options={{icon: 'inbox', tabName: 'Email Inbox'}}
              />
            </My.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
