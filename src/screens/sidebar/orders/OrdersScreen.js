import {StyleSheet, View, Text, FlatList} from 'react-native';
import MechineCard from './MechineCard';
import {FlashList} from '@shopify/flash-list';
import {useEffect} from 'react';

const example = [
  {
    order_number: '13241234aaa',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'FINISHED',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '13241234aaa',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'FINISHED',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '13241234aaa',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'FINISHED',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '13241234aaa',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'FINISHED',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '13241234aaa',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'FINISHED',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '13241234aaa',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'FINISHED',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '13241234aaa',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'FINISHED',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '13241234aaa',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'FINISHED',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
  {
    order_number: '13241234aaa',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'FINISHED',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
];

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      {/* <MechineCard info={example} /> */}
      <FlatList
        contentContainerStyle={styles.list}
        data={example}
        renderItem={({item}) => (
          <MechineCard info={item} style={{paddingRight: 30}} key={3} />
        )}
        numColumns={3}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  list: {
    backgroundColor: 'blue',
    paddingVertical: 20,
    paddingLeft: 20,
  },
});
