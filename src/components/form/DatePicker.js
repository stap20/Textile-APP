// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {datePickerStyle} from '@styles/components/form';
import Icon from '../Icon';

import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

export default function DatePicker({title, value, onChange, style = {}}) {
  const {theme} = useTheme();
  const styles = datePickerStyle(theme);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value ? dayjs(value) : null);

  const handleDateChange = date => {
    console.log(date);
    setSelectedDate(dayjs(date));
    setShowDatePicker(false);
    onChange(date);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TouchableOpacity
        style={[styles.selectorBtn, showDatePicker && styles.focused]}
        onPress={() => setShowDatePicker(!showDatePicker)}>
        <Text style={selectedDate ? styles.dateText : styles.placeHolder}>
          {selectedDate ? selectedDate.format('YYYY-MM-DD') : 'Select Date'}
        </Text>
        <Icon iconName={showDatePicker ? 'arrow-up' : 'arrow-down'} />
      </TouchableOpacity>

      {showDatePicker && (
        <View style={styles.datePickerContainer}>
          <View style={styles.datePicker}>
            <DateTimePicker
              mode="single"
              height={styles.datePickerHeight}
              date={selectedDate ? selectedDate.toDate() : new Date()}
              onChange={params => handleDateChange(params.date)}
              calendarTextStyle={styles.calendarText}
              selectedTextStyle={styles.calendarSelectedText}
              selectedItemColor={styles.calendarSelectedItemColor}
              dayContainerStyle={styles.calendarSelectedContainer}
            />
          </View>
        </View>
      )}
    </View>
  );
}
