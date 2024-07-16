import {createStackNavigator} from '@react-navigation/stack';
import ProfilesScreen from '@screens/profiles';
import AddNewProfileScreen from '@screens/addNewProfile';
import {useTheme} from '@theme/ThemeProvider';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  const {theme} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide header
        cardStyle:{backgroundColor:theme.backgroundColors.mainContainer}
      }}>
      <Stack.Screen name="profiles_screen" component={ProfilesScreen} />
      <Stack.Screen name="add_profile_screen" component={AddNewProfileScreen} />
    </Stack.Navigator>
  );
}
