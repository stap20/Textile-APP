import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native'; // Import ScrollView
import {useTheme} from '@theme/ThemeProvider';
import {dropDownStyle} from '@styles/components/form';
import Icon from '../Icon';

const MAX_DROPDOWN_HEIGHT = 160;

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

  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = value => {
    onChange(value);
    setShowDropdown(false);
  };

  let dropDownHeight = options.length * 40 + 10; //10
  dropDownHeight = Math.min(dropDownHeight, MAX_DROPDOWN_HEIGHT);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TouchableOpacity
        style={[styles.selectorBtn, showDropdown && styles.focused]}
        onPress={() => setShowDropdown(!showDropdown)}>
        <Text style={[styles.placeHolder, value && styles.selectedText]}>
          {value ? value.name : placeHolder}
        </Text>
        <Icon iconName={showDropdown ? 'arrow-up' : 'arrow-down'} />
      </TouchableOpacity>

      {showDropdown && (
        <View style={[styles.dropDownWrapper]}>
          <View style={{flex: 1}}>
            {options.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dropdownItem,
                  value && item.id === value.id && styles.activeDropdownItem,
                ]}
                onPress={() => handleSelect(item)}>
                <Text
                  style={[
                    styles.dropdownItemText,
                    value &&
                      item.id === value.id &&
                      styles.activeDropdownItemText,
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
