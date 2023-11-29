import * as React from 'react';
import {
  useNavigationBuilder,
  createNavigatorFactory,
  TabRouter,
} from '@react-navigation/native';

function TabNavigator({initialRouteName, children, screenOptions, LayoutManager}) {
  const {state, navigation, descriptors, NavigationContent} =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  return <LayoutManager {...{navigation, descriptors, state}} />;
}

export const createTabNavigator = createNavigatorFactory(TabNavigator);
