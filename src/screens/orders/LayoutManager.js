// LayoutManager.js
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/orders';
import Header from './Header';
import {CardView, TableView} from './views';

// const chartOption = {
//   xAxis: {
//     name: 'tototo',
//     type: 'category',
//     data: [
//       '02-JAN',
//       '09-JAN',
//       '16-JAN',
//       '02-FAB',
//       '09-FAB',
//       '16-FAB',
//       '02-MAR',
//       '09-MAR',
//       '16-MAR',
//       '02-APR',
//       '09-APR',
//     ],
//   },
//   yAxis: {
//     name: 'tototo2',
//     type: 'value',
//   },
//   data: {
//     max_prod: {
//       name: 'Max Production',
//       data: [220, 182, 191, 234, 290, 330, 310, 100, 170, 10, 190],
//     },
//     min_prod: {
//       name: 'Min Production',
//       data: [120, 132, 101, 134, 90, 230, 210, 20, 75, 60, 100],
//     },
//   },
// };

const tabs = [
  {title: 'Table', id: 'table'},
  {title: 'Cards', id: 'card'},
]; // Add more tabs as needed
const filters = [
  {title: 'All', id: 'all'},
  {title: 'Finished', id: 'finish'},
  {title: 'Pending', id: 'pending'},
  {title: 'In Progress', id: 'stop'},
]; // Add more filters as needed

const data = [
  {
    orderNumber: '#00001',
    status: {state: 'inprogress', reason: 'Needle'},
    startDate: new Date(2023, 9 - 1, 26),
    endDate: new Date(2023, 10 - 1, 26),
    stoppedHour: 36,
    workingHour: 36,
    numberOfMachines: 10,
    finishedQuan: 15,
    totalQuan: 50,
  },
  {
    orderNumber: '#00002',
    status: {state: 'finish', reason: 'Needle'},
    startDate: new Date(2023, 9 - 1, 26),
    endDate: new Date(2023, 10 - 1, 26),
    stoppedHour: 36,
    workingHour: 36,
    numberOfMachines: 10,
    finishedQuan: 15,
    totalQuan: 50,
  },
  {
    orderNumber: '#00003',
    status: {state: 'pending', reason: 'Needle'},
    startDate: new Date(2023, 9 - 1, 26),
    endDate: new Date(2023, 10 - 1, 26),
    stoppedHour: 36,
    workingHour: 36,
    numberOfMachines: 10,
    finishedQuan: 15,
    totalQuan: 50,
  },
  {
    orderNumber: '#00004',
    status: {state: 'stop', reason: 'Needle'},
    startDate: new Date(2023, 9 - 1, 26),
    endDate: new Date(2023, 10 - 1, 26),
    stoppedHour: 36,
    workingHour: 36,
    numberOfMachines: 10,
    finishedQuan: 15,
    totalQuan: 50,
  },
  {
    orderNumber: '#00005',
    status: {state: 'finish', reason: 'Needle'},
    startDate: new Date(2023, 9 - 1, 26),
    endDate: new Date(2023, 10 - 1, 26),
    stoppedHour: 36,
    workingHour: 36,
    numberOfMachines: 10,
    finishedQuan: 15,
    totalQuan: 50,
  },
  {
    orderNumber: '#00006',
    status: {state: 'finish', reason: 'Needle'},
    startDate: new Date(2023, 9 - 1, 26),
    endDate: new Date(2023, 10 - 1, 26),
    stoppedHour: 36,
    workingHour: 36,
    numberOfMachines: 10,
    finishedQuan: 15,
    totalQuan: 50,
  },
];

const prepareData = data => {
  return data.map((item, idx) => {
    const {finishedQuan, totalQuan, startDate, endDate, ...other} = item;

    return {
      progress: parseInt((finishedQuan / totalQuan) * 100),
      progressDetails: `${item.finishedQuan} / ${item.totalQuan}`,
      startDate:
        startDate.getDate() +
        ' / ' +
        (startDate.getMonth() + 1) +
        ' / ' +
        startDate.getFullYear(),
      endDate:
        endDate.getDate() +
        ' / ' +
        (endDate.getMonth() + 1) +
        ' / ' +
        endDate.getFullYear(),
      ...other,
    };
  });
};
export default function LayoutManager() {
  const {theme, toggleTheme} = useTheme();
  const styles = layoutStyles(theme);

  const [activeTab, setActiveTab] = useState(0);
  const [activeFilterTab, setActiveFilterTab] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          {...{
            theme,
            toggleTheme,
            activeTab,
            setActiveTab,
            activeFilterTab,
            setActiveFilterTab,
            tabs,
            filters,
          }}
        />
      </View>
      <View style={styles.mainContainer}>
        {tabs[activeTab].id == 'card' ? (
          <CardView data={prepareData(data)} />
        ) : (
          <TableView data={prepareData(data)} />
        )}
      </View>
    </View>
  );
}
