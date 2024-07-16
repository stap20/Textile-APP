// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {counterInputStyle} from '@styles/components/form';
import Icon from '../Icon';
let timer = null;

export default function CounterInput({
  title,
  max = 999,
  min = 0,
  placeholder = 1,
  value,
  onChange,
  style = {},
}) {
  const {theme} = useTheme();
  const styles = counterInputStyle(theme);
  let count = value;
  const changeNum = newNum => {
    if (newNum >= min && newNum <= max) {
      onChange(newNum);
    }
  };

  const pressIn = (num) => {
    timer = setInterval(() => {
      changeNum(count + num)
      count += num;
    }, 200);
  }

  const stopTimer = () => {
    clearInterval(timer);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.inputTitle}>{title}</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          onPress={() => changeNum(value - 1)}
          onPressIn={() => pressIn(-1)}
          onPressOut={() => stopTimer()}
          style={styles.btnContainer}>
          <Icon iconName={'minus'} />
        </TouchableOpacity>
        <Text style={styles.input}>{value ?? placeholder}</Text>
        <TouchableOpacity
          onPress={() => changeNum(value + 1)}
          onPressIn={() => pressIn(1)}
          onPressOut={() => stopTimer()}
          style={styles.btnContainer}>
          <Icon iconName={'plus'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
