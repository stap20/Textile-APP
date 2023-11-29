import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import OrderCard from './OrderCard';
import {FlashList} from '@shopify/flash-list';
import {useEffect, useState} from 'react';
import {convertToPxLayout} from '@styles/globalStyles';
import NewCard from './NewCard';
import {orderScreen} from '@styles/orders';
import {useTheme} from '@theme/ThemeProvider';

const example = [
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'Finished',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'In Progress',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'Pending',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'Finished',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'Pending',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'In Progress',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'Pending',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'In Progress',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'Pending',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
];

function TabsContainer({tabs, selectedTab, containerStyle, onTabPress}) {
  const {theme, toggleTheme, themeStyles} = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#DDE3E5',
      justifyContent: 'space-between',
      paddingRight: convertToPxLayout(10),
      paddingLeft: convertToPxLayout(20),
      paddingVertical: convertToPxLayout(14),
      borderRadius: convertToPxLayout(16),
    },

    tab: {
      paddingHorizontal: convertToPxLayout(20),
      paddingVertical: convertToPxLayout(14),
      borderRadius: convertToPxLayout(16),
      marginRight: convertToPxLayout(10),
    },
    tabText: {
      fontFamily: 'Inter',
      fontSize: convertToPxLayout(22),
      fontWeight: '600',
      lineHeight: convertToPxLayout(27),
      textAlign: 'left',
      color: 'rgba(60, 68, 70, 0.75)',
    },
  });

  let elements = [];

  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    // 2 means selected
    // 1 means not
    const isSelected = selectedTab == tab ? 2 : 1;

    elements.push(
      <TouchableOpacity
        key={i}
        onPress={() => onTabPress(tab)}
        style={[styles.tab, {backgroundColor: '#FFFFFF'}].slice(0, isSelected)}>
        <Text
          style={[styles.tabText, {color: 'rgba(60, 68, 70, 1)'}].slice(
            0,
            isSelected,
          )}>
          {tab}
        </Text>
      </TouchableOpacity>,
    );
  }

  return <View style={[styles.container, containerStyle]}>{elements}</View>;
}

export default function OrdersScreen() {
  const {theme, toggleTheme, themeStyles} = useTheme();
  const [filter, setFilter] = useState('All');
  const [showType, setShowType] = useState('Card');
  const styles = orderScreen(themeStyles);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TabsContainer
          containerStyle={{left: convertToPxLayout(260), position: 'absolute'}}
          tabs={['Table', 'Card']}
          selectedTab={showType}
          onTabPress={tabClicked => setShowType(tabClicked)}
        />
        <TabsContainer
          tabs={['All', 'Finished', 'Pending', 'In Progress']}
          selectedTab={filter}
          onTabPress={tabClicked => setFilter(tabClicked)}
        />
      </View>
      {/* <FlatList
        contentContainerStyle={styles.list}
        data={example}
        renderItem={({item, index}) =>
          index != 0 ? (
            <OrderCard
              info={item}
              style={{paddingRight: convertToPxLayout(30)}}
              key={3}
            />
          ) : (
            <NewCard
              style={{marginRight: convertToPxLayout(30)}}
              text={'Add Order'}
            />
          )
        }
        numColumns={3}
        ItemSeparatorComponent={() => (
          <View style={{height: convertToPxLayout(30)}} />
        )}
      /> */}
    </View>
  );
}
