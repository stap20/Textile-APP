import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import OrderCard from './OrderCard';
import {FlashList} from '@shopify/flash-list';
import {useEffect, useState} from 'react';
import {convertPxToDp} from '@styles/globalStyles';
import NewCard from './NewCard';
import {orderScreen} from '@styles/orders';
import {useTheme} from '@theme/ThemeProvider';
import {LinearProgress} from 'react-native-elements';
import ShowValues from './ShowValues';

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
      paddingRight: convertPxToDp(10),
      paddingLeft: convertPxToDp(20),
      paddingVertical: convertPxToDp(14),
      borderRadius: convertPxToDp(16),
    },

    tab: {
      paddingHorizontal: convertPxToDp(20),
      paddingVertical: convertPxToDp(14),
      borderRadius: convertPxToDp(16),
      marginRight: convertPxToDp(10),
    },
    tabText: {
      fontFamily: 'Inter',
      fontSize: convertPxToDp(22),
      fontWeight: '600',
      lineHeight: convertPxToDp(27),
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
  const {theme} = useTheme();
  const [filter, setFilter] = useState(
    'All' || 'Finished' || 'Pending' || 'In Progress',
  );
  const [showType, setShowType] = useState('Card' || 'Table');
  const styles = orderScreen(theme);

  return (
    <View style={styles.container}>
      <ShowValues showType={'Card'} data={example} textNew={'New Order'} />
    </View>
  );
}
const bgColor = 'rgba(242, 155, 38, 0.2)';
const contentColor = 'rgba(242, 155, 38, 1)';
const tempStyle = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    marginTop: convertPxToDp(34),
    marginHorizontal: convertPxToDp(82),
  },
  addOrderContainer: {
    // backgroundColor: 'green',
    width: '100%',
  },
  tableContainer: {
    backgroundColor: 'yellow',
    width: '100%',
    height: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: convertPxToDp(16),
    marginBottom: convertPxToDp(78),
    marginTop: convertPxToDp(40),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    paddingVertical: convertPxToDp(22),
  },
  headerText: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: convertPxToDp(16),
    fontWeight: '700',
    lineHeight: convertPxToDp(19),
    textAlign: 'center',
  },

  detailsContainer: {
    alignItems: 'center',
  },
  rowContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingTop: convertPxToDp(15),
    paddingBottom: convertPxToDp(12),
  },
  rowText: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: convertPxToDp(14),
    fontWeight: '500',
    lineHeight: convertPxToDp(20),
    textAlign: 'center',
  },
  rowView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusContainer: {
    height: convertPxToDp(43),
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: bgColor, // green
    alignItems: 'center',
    paddingLeft: convertPxToDp(12),
    paddingRight: convertPxToDp(33),
    paddingVertical: convertPxToDp(10),
    borderRadius: convertPxToDp(15),
  },
  status: {
    marginLeft: convertPxToDp(12),
  },
  statusText: {
    fontFamily: 'Inter',
    fontSize: convertPxToDp(16),
    fontWeight: '700',
    lineHeight: convertPxToDp(19.36),
    textAlign: 'left',
    color: contentColor,
    // temp
  },
  statusIcon: {
    width: convertPxToDp(15),
    height: convertPxToDp(15),
    borderRadius: convertPxToDp(999),
    backgroundColor: contentColor,
    // temp
  },

  actionIcon: {
    width: convertPxToDp(28),
    height: convertPxToDp(28),
    backgroundColor: 'orange',
  },
});
