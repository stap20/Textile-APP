import {createStackNavigator} from '@react-navigation/stack';
import UsersScreen from '@screens/users';
import AddNewUserScreen from '@screens/addNewUser';
import {useTheme} from '@theme/ThemeProvider';

const Stack = createStackNavigator();

export default function UserNavigation() {
  const {theme} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide header
        cardStyle:{backgroundColor:theme.backgroundColors.mainContainer}
      }}>
      <Stack.Screen name="users_screen" component={UsersScreen} />
      <Stack.Screen name="add_user_screen" component={AddNewUserScreen} />
    </Stack.Navigator>
  );
}
