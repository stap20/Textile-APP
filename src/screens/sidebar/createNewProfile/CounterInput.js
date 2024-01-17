import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import {convertPxToDp} from '@utils';
import {useEffect} from 'react';

export default function CounterInput({
  contentContainerStyle,
  onChange,
  max = 999,
  min = 0,
  placeholder = max,
}) {
  const [num, setNum] = useState(placeholder);

  useEffect(() => {
    onChange(num);
  }, [num]);

  const increaseNum = (repeatedly = false) => {
    if (!repeatedly) {
      if (num >= max) {
        setNum(max);
      } else {
        setNum(num + 1);
      }
      // onChange(num);
    } else {
      while (true) {
        if (num >= max) {
          setNum(max);
        } else {
          setNum(num + 1);
        }
        // onChange(num);
      }
    }
  };
  const decreaseNum = (repeatedly = false) => {
    if (!repeatedly) {
      if (num <= min) {
        setNum(min);
      } else {
        setNum(num - 1);
      }
      // onChange(num);
    } else {
      while (true) {
        if (num <= min) {
          setNum(min);
        } else {
          setNum(num - 1);
        }
        // onChange(num);
      }
    }
  };

  return (
    <View style={[styles.container, contentContainerStyle]}>
      <TouchableOpacity
        onPress={() => {
          decreaseNum();
        }}
        style={styles.btnContainer}>
        <Text>-</Text>
      </TouchableOpacity>
      <View>
        <TextInput
          style={styles.numText}
          inputMode="numeric"
          maxLength={3}
          value={num.toString()}
          onChangeText={text => {
            setNum(Number(text));
            onChange(text);
          }}></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => {
          increaseNum();
        }}
        style={styles.btnContainer}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    minWidth: convertPxToDp(179),
    maxWidth: convertPxToDp(253),
    height: convertPxToDp(65),
    borderWidth: convertPxToDp(3),
    borderRadius: convertPxToDp(20),
    borderColor: '#EBECEC',
    paddingHorizontal: convertPxToDp(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnContainer: {
    backgroundColor: 'orange',
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    borderRadius: convertPxToDp(10),

    justifyContent: 'center',
    alignItems: 'center',
  },
  numText: {
    // backgroundColor: 'lightblue',
    fontWeight: '400',
    color: '#757D8A',
    fontSize: convertPxToDp(25),
    // lineHeight: convertPxToDp(40),
  },
});
