import * as React from 'react';
import {
  useNavigationBuilder,
  createNavigatorFactory,
  TabRouter,
} from '@react-navigation/native';

import LayoutManager from '@layout';

function TabNavigator({initialRouteName, children, screenOptions}) {
  const {state, navigation, descriptors, NavigationContent} =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  return <LayoutManager {...{navigation, descriptors, state}} />;
}

export const createTabNavigator = createNavigatorFactory(TabNavigator);
