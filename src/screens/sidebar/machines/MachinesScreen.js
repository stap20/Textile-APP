import {StyleSheet, View, Text, FlatList} from 'react-native';
import MachineCard from './MachineCard';
import {FlashList} from '@shopify/flash-list';
import {useEffect} from 'react';
import {convertPxToDp} from '@styles/globalStyles';
import NewCard from './NewCard';
import ShowValues from './ShowValues';

const example = [
  {
    order_number: '1234567',
    start_date: '26-9-2023',
    end_date: '26-10-2023',
    status: 'Working',
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
    status: 'Stopped',
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
    status: 'Stopped',
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
    status: 'Working',
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
    status: 'Stopped',
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
    status: 'Stopped',
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
    status: 'Stopped',
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
    status: 'Stopped',
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
    status: 'Stopped',
    working_hour: 36,
    stop_hour: 21,
    number_of_machines: 5,
    progress_percent: 45,
    finished_rolls: 15,
    total_rolls: 50,
  },
];

export default function MachinesScreen() {
  return (
    <View style={styles.container}>
      <ShowValues showType={'Table'} data={example} textNew={'Add Machine'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EAED',
  },
  list: {
    paddingVertical: 20,
    paddingLeft: 20,
  },
});
