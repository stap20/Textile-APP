import {NavigationContainer} from '@react-navigation/native';
import {createTabNavigator} from './navigators/TabNavigator';
import HomeScreen from '@screens/HomeScreen';
import OrdersScreen from '@screens/orders';
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
      </SideTabNavigator.Navigator>
    </NavigationContainer>
  );
}
