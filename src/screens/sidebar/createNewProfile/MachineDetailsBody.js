import {StyleSheet, Text, View} from 'react-native';
import TextProfileInput from './TextProfileInput';
import {convertPxToDp} from '@utils';

const type = 'MachineDetails';
let data = {
  name: 'test',
  number: '1234',
  model: '1234',
};

export default function MachineDetailsBody({onChange}) {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Machine Details</Text>
      </View>
      <View style={style.body}>
        <View>
          <Text style={style.subTitle}>Machine Name</Text>
          <TextProfileInput
            contentContainerStyle={{width: convertPxToDp(770)}}
            placeholder={'Machine Name'}
            onChange={text => {
              onChange(type, data);
              data.name = text;
            }}
          />
        </View>
        <View>
          <Text style={style.subTitle}>Machine Number</Text>
          <TextProfileInput
            contentContainerStyle={{width: convertPxToDp(770)}}
            placeholder={'Machine Number'}
            onChange={text => {
              data.number = text;
              onChange(type, data);
            }}
          />
        </View>
        <View>
          <Text style={style.subTitle}>Model Number</Text>
          <TextProfileInput
            contentContainerStyle={{width: convertPxToDp(770)}}
            placeholder={'Model Number'}
            onChange={text => {
              data.model = text;
              onChange(type, data);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    // backgroundColor: 'lightblue',

    // width: '50%',
    minWidth: '50%',
    maxWidth: '100%',

    height: '100%',
    paddingHorizontal: convertPxToDp(43),
    paddingBottom: convertPxToDp(100),
  },
  header: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  body: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-around',
  },

  title: {
    fontWeight: '600',
    fontSize: convertPxToDp(35),
    lineHeight: convertPxToDp(40),
    color: '#3C4446',
  },
  subTitle: {
    fontWeight: '500',
    fontSize: convertPxToDp(30),
    lineHeight: convertPxToDp(40),
    marginBottom: convertPxToDp(25),
    color: '#3C4446',
  },
});
