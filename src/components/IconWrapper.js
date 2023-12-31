import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Import other icon libraries as needed

const iconSets = {
  MaterialCommunityIcons,
  FontAwesome,
  // Add more icon libraries as needed
};

export default function IconWrapper({type, ...iconProps}) {
  const IconSet = iconSets[type];

  if (!IconSet) {
    // Return a default or placeholder icon if the icon library is not set
    return (
      <View>
        <Text>Unknown Icon</Text>
      </View>
    );
  }

  return <IconSet {...iconProps} />;
}
