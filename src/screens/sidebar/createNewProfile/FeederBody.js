import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import TextProfileInput from './TextProfileInput';
import {convertPxToDp} from '@utils';
import MultiChoice from './MultiChoice';
import CounterInput from './CounterInput';
import {useState} from 'react';
import {useEffect} from 'react';

const type = 'Feeder';
let data = [];

let tempItemData = {
  id: 0,
  type: 'test',
  yarnCount: '999',
  numOfFeeder: '999',
};

const ListItem = ({item, requestClose}) => {
  return (
    <View style={body.listItemContainer}>
      <Text style={{flex: 10, justifyContent: 'center', alignItems: 'center'}}>
        {item.id} {item.type}
      </Text>
      <Text style={{flex: 10, justifyContent: 'center', alignItems: 'center'}}>
        {item.yarnCount}
      </Text>
      <Text style={{flex: 10, justifyContent: 'center', alignItems: 'center'}}>
        {item.numOfFeeder}
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => requestClose()}
          style={{
            width: convertPxToDp(24),
            height: convertPxToDp(24),
            backgroundColor: 'orange',
          }}></TouchableOpacity>
      </View>
    </View>
  );
};

export default function FeederBody({onChange, mode}) {
  const [feederList, setFeederList] = useState(data);
  const [rerender, setRerender] = useState(true);

  useEffect(() => {
    console.log(`Updated`);
    data = feederList;
  }, [feederList]);

  const addItem = () => {
    tempItemData.id += 1;
    data.push({...tempItemData});
    setFeederList(data);
    setRerender(!rerender);
    console.log(data);
    onChange(type, data);
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
        <Text style={styles.title}>Feeder</Text>
      </View>
      <View style={styles.body}>
        <View style={body.inputContainer}>
          <View style={body.inputItem}>
            <Text style={styles.subTitle}>Feeder Type</Text>
            <MultiChoice
              onSelect={e => (tempItemData.type = e.name)}
              contentContainerStyle={{
                maxWidth: convertPxToDp(mode == 'half' ? 284 : 377),
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
          <View style={body.inputItem}>
            <Text style={styles.subTitle}>Yarn Count</Text>
            <CounterInput
              contentContainerStyle={{
                width: mode == 'half' ? convertPxToDp(179) : convertPxToDp(253),
              }}
              onChange={text => {
                tempItemData.yarnCount = text;
              }}
            />
          </View>
          <View style={body.inputItem}>
            <Text style={styles.subTitle}>Num Of Feeder</Text>
            <CounterInput
              contentContainerStyle={{
                width: mode == 'half' ? convertPxToDp(179) : convertPxToDp(253),
              }}
              onChange={text => {
                tempItemData.numOfFeeder = text;
              }}
            />
          </View>
          <View
            style={[
              body.inputItem,
              {
                marginRight: convertPxToDp(43),
                width: convertPxToDp(mode == 'half' ? 135 : 200),
                marginTop: convertPxToDp(mode == 'half' ? 25 : 0),
                justifyContent: mode != 'half' ? 'flex-end' : 'flex-start',
              },
            ]}>
            <TouchableOpacity
              onPress={() => {
                addItem();
              }}
              style={body.containerBtn}>
              <Text style={body.textBtn}>{'Add'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            body.listContainer,
            {marginTop: convertPxToDp(mode == 'half' ? 35 : 65)},
          ]}>
          <FlatList
            extraData={rerender}
            data={feederList}
            renderItem={({item}) => (
              <ListItem
                item={item}
                requestClose={() => {
                  setFeederList(feederList.filter(a => a != item));
                  data.filter(a => a != item);
                  // tempItemData.id = data.length - 1;
                }}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
}

const body = StyleSheet.create({
  container: {
    // flex: 1,
    // width: '100%',
    backgroundColor: 'lightblue',
  },
  inputContainer: {
    // flex: 2,
    // width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'yellow',
    justifyContent: 'flex-end',
  },
  inputItem: {
    marginRight: 'auto',
  },
  listContainer: {
    flex: 1,
    // backgroundColor: '#FFFFFF',
    // borderTopWidth: convertPxToDp(0),
    borderWidth: convertPxToDp(3),
    borderRadius: convertPxToDp(20),
    borderColor: '#EBECEC',
    overflow: 'scroll',
  },
  listItemContainer: {
    flexDirection: 'row',
    paddingVertical: convertPxToDp(20.07),
    paddingLeft: convertPxToDp(25),
    paddingRight: convertPxToDp(50),
    justifyContent: 'space-between',
    borderTopWidth: convertPxToDp(3),
    borderColor: '#EBECEC',
  },

  containerBtn: {
    // flex: 1,
    // minWidth: convertPxToDp(200),
    // maxWidth: convertPxToDp(135),
    height: convertPxToDp(65),
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

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'lightblue',

    // width: '50%',
    // minWidth: '50%',
    // maxWidth: '100%',

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
    // backgroundColor: 'lightblue',
    // flexDirection: 'row',
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
