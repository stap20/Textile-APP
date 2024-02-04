// LayoutManager.js
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/orders';
import Header from './Header';
import {CardView, TableView} from './views';
import {OrderHandler} from '@services/graphql';

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
  {title: 'Table', id: 'table', view: TableView},
  {title: 'Cards', id: 'card', view: CardView},
]; // Add more tabs as needed
const filters = [
  {title: 'All', id: 'all'},
  {title: 'Finished', id: 'finish'},
  {title: 'Pending', id: 'pending'},
  {title: 'In Progress', id: 'inprogress'},
]; // Add more filters as needed

const data = OrderHandler.Order.getOrdersData();

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

  const CurrentView = tabs[activeTab].view;

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
        <CurrentView data={prepareData(data)} />
      </View>
    </View>
  );
}
