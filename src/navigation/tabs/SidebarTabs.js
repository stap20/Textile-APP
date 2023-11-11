import React from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SidebarTabs = ({navigation, descriptors}) => {
  const {routes, index} = navigation.getState();

  return (
    <View style={styles.tabContainer}>
      {routes.map((route, tabIndex) => {
        const {name} = route;

        const tabName = descriptors[route.key].options.title ?? route.name;
        const color = tabIndex === index ? 'white' : 'grey';
        const icon = descriptors[route.key].options.icon ?? 'star'

        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(name)}
            style={styles.tab}
            key={route.key}>
            <Icon
              name={icon}
              size={24}
              color={color}
              style={{marginRight: 10}}
            />
            <View style={{flex: 1}}>
              <Text style={{color}}>{tabName}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {position: 'absolute', top: 0},
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    margin: 5,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    paddingHorizontal: 20,
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 200,
    backgroundColor: 'black',
  },
});

export default SidebarTabs;
