import {createStackNavigator} from '@react-navigation/stack';
import AttachmentsScreen from '@screens/attachments';
import AddNewAttachmentScreen from '@screens/addNewAttachment';
import {useTheme} from '@theme/ThemeProvider';

const Stack = createStackNavigator();

export default function AttachmentNavigation() {
  const {theme} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide header
        cardStyle:{backgroundColor:theme.backgroundColors.mainContainer}
      }}>
      <Stack.Screen name="attachments_screen" component={AttachmentsScreen} />
      <Stack.Screen name="add_attachment_screen" component={AddNewAttachmentScreen} />
    </Stack.Navigator>
  );
}
