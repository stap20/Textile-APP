import {createStackNavigator} from '@react-navigation/stack';
import OrdersScreen from '@screens/orders';
import OrderProfile from '@screens/orderProfile';
import AddNewOrderScreen from '@screens/addNewOrder';
import {useTheme} from '@theme/ThemeProvider';

const Stack = createStackNavigator();

export default function OrderNavigation() {
  const {theme} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide header
        cardStyle:{backgroundColor:theme.backgroundColors.mainContainer}
      }}>
      <Stack.Screen name="orders_screen" component={OrdersScreen} />
      <Stack.Screen name="order_profile_screen" component={OrderProfile} />
      <Stack.Screen name="add_order_screen" component={AddNewOrderScreen} />
    </Stack.Navigator>
  );
}
