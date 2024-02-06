import {createStackNavigator} from '@react-navigation/stack';
import MachinesScreen from '@screens/machines';
import MachineProfile from '@screens/machineProfile';
import {useTheme} from '@theme/ThemeProvider';

const Stack = createStackNavigator();

export default function MachineNavigation() {
  const {theme} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide header
        cardStyle:{backgroundColor:theme.backgroundColors.mainContainer}
      }}>
      <Stack.Screen name="machines_screen" component={MachinesScreen} />
      <Stack.Screen name="machine_profile_screen" component={MachineProfile} />
    </Stack.Navigator>
  );
}
