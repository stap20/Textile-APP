import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {convertPxToDp} from '@utils';

export default function TextProfileInput({
  contentContainerStyle,
  onChange,
  placeholder,
  inputMode,
  maxLength,
  range = [0, 99],
}) {
  const [text, setText] = useState('');

  const checkRange = text => {
    if (Number(text) > range[1]) {
      return range[1].toString();
    }
    if (Number(text) < range[0]) {
      return range[0].toString();
    }
    return text;
  };

  return (
    <View style={[styles.container, contentContainerStyle]}>
      <View style={styles.inputTextContainer}>
        <TextInput
          maxLength={maxLength}
          inputMode={inputMode}
          placeholder={placeholder}
          placeholderTextColor={'#757D8A'}
          style={styles.input}
          onChangeText={Text => {
            if (inputMode == 'numeric') {
              setText(checkRange(Text));
              onChange(checkRange(Text));
            } else {
              setText(Text);
              onChange(Text);
            }
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
