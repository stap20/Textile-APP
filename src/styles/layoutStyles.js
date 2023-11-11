import { StyleSheet } from "react-native";

export default layoutStyles = (theme) => {
  return StyleSheet.create({
    container: {
      height: '100%',
    },
    ltrContainer: {
      flexDirection: 'row', // Left-to-Right (LTR) layout
    },
    rtlContainer: {
      flexDirection: 'row-reverse', // Right-to-Left (RTL) layout
    },
    mainContainer: {
      flex: 1, // Take up remaining space in the container
    },
    sidebarContainer: {
      width: 160,
      backgroundColor: theme.colors.sidebar_background,   
    },
  });
};