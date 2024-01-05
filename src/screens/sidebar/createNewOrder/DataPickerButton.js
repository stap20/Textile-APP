import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {convertPxToDp} from '@utils';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DataPickerButton({contentContainerStyle, onSelect}) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    onSelect(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
    setMode('date');
  };

  return (
    <View style={[styles.container, contentContainerStyle]}>
      <View style={styles.dateTextContainer}>
        <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
      </View>
      <View style={styles.selectDateContainer}>
        <TouchableOpacity
          onPress={() => showDatepicker()}
          style={{
            width: convertPxToDp(17.5),
            height: convertPxToDp(17.5),
            backgroundColor: 'orange',
          }}></TouchableOpacity>
        {show && (
          <DateTimePicker value={date} mode={mode} onChange={onChange} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: convertPxToDp(307),
    height: convertPxToDp(65),
    borderRadius: convertPxToDp(20),
    borderWidth: convertPxToDp(3),
    borderColor: '#EBECEC',
  },
  dateTextContainer: {
    flex: 4,
    justifyContent: 'center',
    paddingLeft: convertPxToDp(30.52),
  },
  selectDateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontWeight: '400',
    fontSize: convertPxToDp(20),
    lineHeight: convertPxToDp(40),
    color: '#757D8A', // TODO:
  },
});
