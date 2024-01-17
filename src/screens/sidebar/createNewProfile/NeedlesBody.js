import {StyleSheet, Text, View} from 'react-native';
import TextProfileInput from './TextProfileInput';
import {convertPxToDp} from '@utils';

const type = 'Needles';
let data = {
  numOfNeedles: '12345',
  courses: '12345',
  diameter: '12345',
  wales: '12345',
};

export default function NeedlesBody({onChange}) {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Needles</Text>
      </View>
      <View style={style.body}>
        <View>
          <Text style={style.subTitle}>Number Of Needles</Text>
          <TextProfileInput
            contentContainerStyle={{width: convertPxToDp(770)}}
            placeholder={'Number Of Needles'}
            onChange={text => {
              data.numOfNeedles = text;
              onChange(type, data);
            }}
          />
        </View>
        <View>
          <Text style={style.subTitle}>Courses</Text>
          <TextProfileInput
            contentContainerStyle={{width: convertPxToDp(770)}}
            placeholder={'Courses'}
            onChange={text => {
              data.courses = text;
              onChange(type, data);
            }}
          />
        </View>
        <View>
          <Text style={style.subTitle}>Diameter</Text>
          <TextProfileInput
            contentContainerStyle={{width: convertPxToDp(770)}}
            placeholder={'Diameter'}
            onChange={text => {
              data.diameter = text;
              onChange(type, data);
            }}
          />
        </View>
        <View>
          <Text style={style.subTitle}>Wales</Text>
          <TextProfileInput
            contentContainerStyle={{width: convertPxToDp(770)}}
            placeholder={'Wales'}
            onChange={text => {
              data.wales = text;
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
