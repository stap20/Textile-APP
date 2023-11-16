import {NavigationContainer} from '@react-navigation/native';
import {createTabNavigator} from './navigators/TabNavigator';
import HomeScreen from '@screens/HomeScreen';
import SidebarScreen from '@screens/SidebarScreen';

const SideTabNavigator = createTabNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <SideTabNavigator.Navigator>
        <SideTabNavigator.Screen
          name="Home"
          component={HomeScreen}
          options={{icon: 'dashboard', tabName: 'Homel'}}
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
