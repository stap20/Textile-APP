import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {convertPxToDp} from '@styles/globalStyles';
import ProgressBar from './ProgressBar';
import FormsSwitcherNewProfile from './FormsSwitcherNewProfile';

export default function CreateNewProfileScreen() {
  const [machineDetails, setMachineDetails] = useState({
    name: 'test',
    number: '1234',
    model: '1234',
  });
  const [needles, setNeedles] = useState({
    numOfNeedles: '12345',
    courses: '12345',
    diameter: '12345',
    wales: '12345',
  });
  const [feeders, setFeeders] = useState([
    {
      type: 'test',
      yarnCount: '999',
      numOfFeeder: '999',
    },
  ]);
  const [LFA, setLFA] = useState({
    type: '12345',
    diameter: '9.99',
  });

  return <View style={styles.content}></View>;
}

const footer = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

const body = StyleSheet.create({
  container: {
    flex: 5,
    // backgroundColor: 'yellow',
  },
});

const header = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
});

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: convertPxToDp(100),
    marginHorizontal: convertPxToDp(82),
    marginBottom: convertPxToDp(32),
    borderRadius: convertPxToDp(50),
    overflow: 'hidden',
  },
});
