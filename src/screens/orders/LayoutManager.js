// LayoutManager.js
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {layoutStyles} from '@styles/screens/orders';
import Header from './Header';
import OrdersScreen from '@screens/sidebar/orders/OrdersScreen';
import {CardView} from './views';

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

const tabs = [{title: 'Table'}, {title: 'Cards'}]; // Add more tabs as needed
const filters = [
  {title: 'All'},
  {title: 'Finished'},
  {title: 'Pending'},
  {title: 'In Progress'},
]; // Add more filters as needed

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
        <CardView />
      </View>
    </View>
  );
}
