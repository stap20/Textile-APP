import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {convertPxToDp} from '@utils';
import {useTheme} from '@theme/ThemeProvider';
import {newDropDownStyle} from '@styles/components/form';
let dropDownstyles = null;

export default function ItemComponent({name, unSelect}) {
  const {theme} = useTheme();
  dropDownstyles = newDropDownStyle(theme);
  return (
    <View style={dropDownstyles.itemContaienr}>
      <Text style={dropDownstyles.itemText}>{name}</Text>
      <TouchableOpacity
        onPress={() => unSelect()}
        style={{
          width: convertPxToDp(12.5),
          height: convertPxToDp(12.5),
          backgroundColor: 'orange',
        }}></TouchableOpacity>
    </View>
  );
}
