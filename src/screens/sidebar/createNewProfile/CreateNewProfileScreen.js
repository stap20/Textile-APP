import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {convertPxToDp} from '@styles/globalStyles';
import ProgressBar from './ProgressBar';
import FormsSwitcherNewProfile from './FormsSwitcherNewProfile';

const NewProfileScreen_Forms = ['MachineDetails', 'Needles', 'Feeder', 'LFA'];

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

  const [currentLvl, setCurrentLvl] = useState(3);
  const [currentForm, setCurrentForm] = useState(
    NewProfileScreen_Forms[currentLvl - 1],
  );
  const maxLvls = 4;

  return (
    <View style={styles.content}>
      <View style={header.container}>
        <ProgressBar maxLvls={maxLvls} activeLvl={currentLvl} />
      </View>
      <View style={body.container}>
        <FormsSwitcherNewProfile
          name={currentForm}
          onChange={(type, data) => {
            console.log(`data (${Object.keys(data)}) received from ${type}`);
            switch (type) {
              case 'MachineDetails':
                setMachineDetails(data);
                break;
              case 'Needles':
                setNeedles(data);
                break;
              case 'Feeder':
                setFeeders(data);
                break;
              case 'LFA':
                setLFA(data);
                break;

              default:
                break;
            }
          }}
        />
      </View>
      <View style={footer.container}>
        <View style={footer.containerBtn}>
          <Text style={footer.textBtn}>
            {currentLvl < maxLvls ? 'Next' : 'Save'}
          </Text>
        </View>
        <View
          style={[
            footer.containerBtn,
            {backgroundColor: 'white', borderWidth: convertPxToDp(1)},
          ]}>
          <Text style={[footer.textBtn, {color: '#3c4446'}]}>
            {currentLvl == 1 ? 'Cancel' : 'Back'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const footer = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    // backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
  },
  containerBtn: {
    // flex: 1,
    width: convertPxToDp(350),
    height: convertPxToDp(90),
    backgroundColor: '#3C4446', //TODO:
    borderRadius: convertPxToDp(20),
    // borderWidth: convertPxToDp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontWeight: '600',
    fontSize: convertPxToDp(30),
    lineHeight: convertPxToDp(40),
    color: '#FFFFFF', // TODO:
  },
});

const body = StyleSheet.create({
  container: {
    flex: 5,
    // backgroundColor: 'lightblue',
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
    // width: '50%',
  },
});
