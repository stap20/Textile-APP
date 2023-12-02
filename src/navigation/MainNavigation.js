import {NavigationContainer} from '@react-navigation/native';
import {createTabNavigator} from './navigators/TabNavigator';
import HomeScreen from '@screens/HomeScreen';
import OrdersScreen from '@screens/sidebar/orders/OrdersScreen';
import MachinesScreen from '@screens/sidebar/machines/MachinesScreen';
import SidebarScreen from '@screens/SidebarScreen';
import LayoutManager from '@layout';

const SideTabNavigator = createTabNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <SideTabNavigator.Navigator LayoutManager={LayoutManager}>
        <SideTabNavigator.Screen
          name="Home"
          component={HomeScreen}
          options={{icon: 'dashboard', tabName: 'Homel'}}
        />
        <SideTabNavigator.Screen
          name="Orders"
          component={OrdersScreen}
          options={{icon: 'dashboard', tabName: 'Orders'}}
        />
        <SideTabNavigator.Screen
          name="Machines"
          component={MachinesScreen}
          options={{icon: 'dashboard', tabName: 'Machines'}}
        />
        <SideTabNavigator.Screen
          name="Feed"
          component={SidebarScreen}
          options={{icon: 'dashboard', tabName: 'Email Inbox'}}
        />
      </SideTabNavigator.Navigator>
    </NavigationContainer>
  );
}
