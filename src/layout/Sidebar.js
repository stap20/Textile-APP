import React from 'react';

import {View, StyleSheet} from 'react-native';
import {SidebarTabComponent} from '@components';

export default function Sidebar(props) {
  const {changeLanguage, toggleTheme, navigation, descriptors} = props;
  const {routes, index} = navigation.getState();

  const SidebarTabs = routes.map((route, tabIndex) => {
    const name = descriptors[route.key].options.tabName ?? route.name;
    const isActive = tabIndex == index;
    const icon =
      (isActive
        ? descriptors[route.key].options.active_icon
        : descriptors[route.key].options.icon) ?? 'star';
    const onPress = () => navigation.navigate(route.name);

    return (
      <SidebarTabComponent
        key={route.key}
        {...{
          name,
          icon,
          isActive,
          onPress,
        }}
      />
    );
  });

  return <View style={styles.tabContainer}>{SidebarTabs}</View>;
}

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
