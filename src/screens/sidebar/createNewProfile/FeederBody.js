import {StyleSheet, Text, View} from 'react-native';
import TextProfileInput from './TextProfileInput';
import {convertPxToDp} from '@utils';
import MultiChoice from './MultiChoice';

const type = 'Feeder';
let data = [
  {
    type: 'test',
    yarnCount: '999',
    numOfFeeder: '999',
  },
];

export default function FeederBody({onChange}) {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Feeder</Text>
      </View>
      <View style={style.body}>
        <View>
          <View>
            <Text style={style.subTitle}>Feeder Type</Text>
            <MultiChoice
              contentContainerStyle={{
                minWidth: convertPxToDp(377),
                maxWidth: convertPxToDp(377),
              }}
              itemsStyle={{borderWidth: convertPxToDp(3), borderColor: 'black'}}
              choicesStyle={{
                borderWidth: convertPxToDp(3),
                borderColor: 'black',
              }}
              unSelect={false}
              singleChoice={true}
            />
          </View>

          <View></View>
          <View></View>
          <View></View>
        </View>
        <View></View>
      </View>
    </View>
  );
}

const body = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
  },
});

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
    justifyContent: 'center',
  },
  body: {
    flex: 5,
    backgroundColor: 'lightblue',
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
