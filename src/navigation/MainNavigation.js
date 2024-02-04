import {NavigationContainer} from '@react-navigation/native';
import {createTabNavigator} from './navigators/TabNavigator';
import LayoutManager from '@layout';
import NAVIGATION_LIST from './NAVIGATION_LIST';

const SideTabNavigator = createTabNavigator();

export default function MainNavigation() {

  return (
    <NavigationContainer>
      <SideTabNavigator.Navigator LayoutManager={LayoutManager}>
        {NAVIGATION_LIST.map((item, idx) => {
          return (
            <SideTabNavigator.Screen
              key={idx}
              name={item.name}
              component={item.component}
              options={item.options}
            />
          );
        })}
      </SideTabNavigator.Navigator>
    </NavigationContainer>
  );
}
