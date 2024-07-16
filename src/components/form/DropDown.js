import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native'; // Import ScrollView
import {useTheme} from '@theme/ThemeProvider';
import {dropDownStyle} from '@styles/components/form';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from '../Icon';

const MAX_DROPDOWN_HEIGHT = 250;

export default function DropDown({
  placeHolder,
  title,
  options,
  value,
  onChange,
  style = {},
}) {
  const {theme} = useTheme();
  const styles = dropDownStyle(theme);
  const [isFocus, setIsFocus] = useState(false);

  const handleSelect = value => {
    onChange(value);
  };

  const renderItem = item => {
    return (
      <View
        style={[
          styles.dropdownItem,
          value && item.id === value.id && styles.activeDropdownItem,
        ]}>
        <Text
          style={[
            styles.dropdownItemText,
            value && item.id === value.id && styles.activeDropdownItemText,
          ]}>
          {item.name}
        </Text>
      </View>
    );
  };

  let dropDownHeight = options.length * 33.33; //10
  dropDownHeight = Math.min(dropDownHeight+25, MAX_DROPDOWN_HEIGHT);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.inputTitle}>{title}</Text>
      <Dropdown
        style={[styles.dropDownSelector, isFocus && styles.focused]}
        containerStyle={styles.dropDownContainer}
        placeholderStyle={styles.placeHolder}
        selectedTextStyle={styles.selectedText}
        data={options}
        maxHeight={dropDownHeight}
        minHeight={dropDownHeight}
        labelField="name"
        valueField="id"
        placeholder={placeHolder}
        value={value}
        onChange={handleSelect}
        renderItem={renderItem}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={()=>{setIsFocus(false)}}
      />
    </View>
  );
}
