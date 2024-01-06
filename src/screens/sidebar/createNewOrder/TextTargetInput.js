import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {convertPxToDp} from '@utils';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function TextTargetInput({
  contentContainerStyle,
  onChange,
  placeholder,
}) {
  const [text, setText] = useState('');

  return (
    <View style={[styles.container, contentContainerStyle]}>
      <View style={styles.inputTextContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'#757D8A'}
          style={styles.input}
          onChangeText={Text => {
            setText(Text);
            onChange(Text);
          }}
          value={text}
        />
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
    alignItems: 'center',
  },
  inputTextContainer: {
    // backgroundColor: 'red',
    marginLeft: convertPxToDp(30.52),
  },
});
