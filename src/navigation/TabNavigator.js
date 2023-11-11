import * as React from 'react';
import {Text, Pressable, View, StyleSheet} from 'react-native';
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  createNavigatorFactory,
  TabRouter,
  TabActions,
} from '@react-navigation/native';

import SidebarTabs from './tabs/SidebarTabs';
import { SafeAreaView } from 'react-native';

function TabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) {
  const {state, navigation, descriptors, NavigationContent} =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  const descriptor = descriptors[state.routes[state.index].key];

  const ActiveScreen = () => descriptor.render();

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
      <NavigationContent>
        <View style={[{flexDirection: 'row'}, tabBarStyle]}>
          <SidebarTabs descriptors={descriptors} navigation={navigation} />
        </View>

        <View style={[{flex: 1}, contentStyle]}>
          <ActiveScreen navigation={descriptor.navigation} />
        </View>
      </NavigationContent>
    </SafeAreaView>
  );
}

export const createMyNavigator = createNavigatorFactory(TabNavigator);
