import React from 'react';

import {View, StyleSheet} from 'react-native';
import {SidebarTab} from '@components';

export default function Sidebar(props) {
  const {changeLanguage, toggleTheme, navigation, descriptors} = props;
  const {routes, index} = navigation.getState();

  const SidebarTabs = routes.map((route, tabIndex) => {
    const name = descriptors[route.key].options.tabName ?? route.name;
    const icon = descriptors[route.key].options.icon ?? 'star';
    const isActive = tabIndex == index;
    const onPress = () => navigation.navigate(route.name);

    return (
      <SidebarTab
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
