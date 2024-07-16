// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {inputStyle} from '@styles/components/form';

export default function Input({title, value, onChange, isNumeric, style = {}}) {
  const {theme} = useTheme();
  const styles = inputStyle(theme);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const numberValidator = num => {
    const numericValue = num.replace(/[^0-9.]/g, '');

    return numericValue;
  };

  const handleChange = txt => {
    if (isNumeric) {
      onChange(numberValidator(txt));
      return;
    }

    onChange(txt);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={handleChange}
        style={[styles.input, isFocused && styles.focused]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType={isNumeric ? 'numeric' : 'default'}
      />
    </View>
  );
}
