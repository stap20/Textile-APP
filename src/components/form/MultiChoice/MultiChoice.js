import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {multiChoiceStyle, newDropDownStyle} from '@styles/components/form';
import DropDown from './DropDown';

const example = [
  {id: '1', name: 'Machine 1'},
  {id: '2', name: 'Machine 2'},
  {id: '3', name: 'Machine 3'},
  {id: '4', name: 'Machine 4'},
  {id: '5', name: 'Machine 5'},
];

let dropDownstyles = null;

export default function MultiChoice({
  dropDownstyle = {},
  style = {},
  onChange,
  options = example,
  value, // not usefull ig
  title,
  placeholder,
}) {
  const {theme} = useTheme();
  dropDownstyles = newDropDownStyle(theme);
  return (
    <View style={[multiChoiceStyle().container, style]}>
      <Text style={[multiChoiceStyle().title]}>{title}</Text>
      <DropDown
        style={dropDownstyle}
        onChange={onChange}
        options={options}
        // value={}
        placeholder={placeholder}
      />
    </View>
  );
}
