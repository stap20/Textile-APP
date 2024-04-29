import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {convertPxToDp} from '@styles/globalStyles';
import DataPickerButton from './DataPickerButton';
import MultiChoice from './MultiChoice';
import TextTargetInput from './TextTargetInput';

export default function CreateNewOrderScreen() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [machines, setMachines] = useState([]);
  const [targetRolls, setTargetRolls] = useState('');
  const [taregtWeight, setTargetWeight] = useState('');

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Order Details</Text>
      </View>
      <View style={styles.body}>
        <View style={body.container}>
          <View style={body.firstRow}>
            <View style={body.startDateContainer}>
              <Text style={body.inputTitleText}>Start Date</Text>
              <DataPickerButton onSelect={date => setStartDate(date)} />
            </View>
            <View style={body.endDateContainer}>
              <Text style={body.inputTitleText}>End Date</Text>
              <DataPickerButton onSelect={date => setEndDate(date)} />
            </View>
          </View>
          <View style={body.secondRow}>
            <View style={body.targetRollsContainer}>
              <Text style={body.inputTitleText}>Target Rolls</Text>
              <TextTargetInput
                onChange={setTargetRolls}
                placeholder={'Target Rolls'}
              />
            </View>
            <View style={body.machinesChoiceContainer}>
              <Text style={body.inputTitleText}>Choose Machine</Text>
              <MultiChoice onChangeValue={setMachines} />
            </View>
          </View>
          <View style={body.thirdRow}>
            <View style={body.targetWeightContainer}>
              <Text style={body.inputTitleText}>Target Weight</Text>
              <TextTargetInput
                onChange={setTargetWeight}
                placeholder={'Target Weight'}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={footer.containerBtn}>
          <Text style={footer.textBtn}>Save</Text>
        </View>
        <View
          style={[
            footer.containerBtn,
            {backgroundColor: 'white', borderWidth: convertPxToDp(1)},
          ]}>
          <Text style={[footer.textBtn, {color: '#3c4446'}]}>Cancel</Text>
        </View>
      </View>
    </View>
  );
}

const footer = StyleSheet.create({
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
    flex: 1,
    width: '50%',
    // backgroundColor: 'red',
  },
  firstRow: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#ffd123',
    paddingLeft: convertPxToDp(45),
    gap: convertPxToDp(150),
    // alignItems: 'center',
  },
  secondRow: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#fffcda',
    paddingLeft: convertPxToDp(45),
    gap: convertPxToDp(150),
    // alignItems: 'center',
  },
  thirdRow: {
    flex: 2,
    flexDirection: 'row',
    // backgroundColor: '#5f6fff',
    paddingLeft: convertPxToDp(45),
  },

  inputTitleText: {
    fontWeight: '500',
    fontSize: convertPxToDp(30),
    lineHeight: convertPxToDp(40),
    color: '#3C4446', // TODO:
    marginBottom: convertPxToDp(25),
  },
});

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: convertPxToDp(100),
    marginHorizontal: convertPxToDp(82),
    marginBottom: convertPxToDp(32),
    borderRadius: convertPxToDp(50),
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: convertPxToDp(45),
  },
  headerText: {
    fontSize: convertPxToDp(35),
    fontWeight: '600',
    lineHeight: convertPxToDp(40),
    color: '#3C4446', // TODO:
  },
  body: {
    flex: 5,
    // backgroundColor: 'lightgreen',
  },
  footer: {
    flex: 1,
    flexDirection: 'row-reverse',
    // backgroundColor: 'purple',
    justifyContent: 'center',
    gap: convertPxToDp(124),
    alignItems: 'center',
  },
});
