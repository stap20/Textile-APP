import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import TextProfileInput from './TextProfileInput';
import {convertPxToDp} from '@utils';
import MultiChoice from './MultiChoice';
import CounterInput from './CounterInput';
import {useState} from 'react';
import {useEffect} from 'react';

const type = 'LFA';
let data = [];

let tempItemData = {
  id: 0,
  type: 'LFA Type',
  diameter: '9.99',
};

const ListItem = ({item, requestClose, mode}) => {
  return (
    <View style={body.listItemContainer}>
      <Text
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'yellow',
        }}>
        {item.type}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          // backgroundColor: 'lightblue',
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            marginRight: convertPxToDp(mode != 'half' ? 253 : 268),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {item.diameter}
        </Text>
        <View
          style={{
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
    </View>
  );
};

export default function LFABody({onChange, mode}) {
  const [lfaList, setLfaList] = useState(data);
  const [rerender, setRerender] = useState(true);

  useEffect(() => {
    console.log(`Updated`);
    data = lfaList;
  }, [lfaList]);

  const addItem = () => {
    tempItemData.id += 1;
    data.push({...tempItemData});
    setLfaList(data);
    setRerender(!rerender);
    console.log(data);
    onChange(type, data);
  };

  return (
    <View style={[styles.container, {width: mode == 'half' ? '50%' : null}]}>
      <View style={styles.header}>
        <Text style={styles.title}>LFA</Text>
      </View>
      <View style={styles.body}>
        <View style={body.inputContainer}>
          <View
            style={[
              body.inputItem,
              {
                // flex: 5,
                // backgroundColor: 'red',
              },
            ]}>
            <Text style={styles.subTitle}>LFA Type</Text>
            <MultiChoice
              onSelect={e => (tempItemData.type = e.name)}
              contentContainerStyle={{
                flex: 1,
                maxWidth: convertPxToDp(mode == 'half' ? 366 : 1091),
                minWidth: convertPxToDp(mode == 'half' ? 366 : 1091),
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
          <View
            style={[
              body.inputItem,
              {
                justifyContent: 'center',
                marginHorizontal: convertPxToDp(45),
              },
            ]}>
            <Text style={styles.subTitle}>Diameter</Text>
            <TextProfileInput
              inputMode={'numeric'}
              range={[0, 9.99]}
              maxLength={4}
              contentContainerStyle={{
                width: convertPxToDp(mode == 'half' ? 179 : 200),
              }}
              onChange={t => {
                tempItemData.diameter = t;
              }}
              placeholder={'9.99'}
            />
          </View>
          <View
            style={[
              body.inputItem,
              {
                width: convertPxToDp(mode == 'half' ? 135 : 200),
                justifyContent: 'flex-end',
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
            data={lfaList}
            renderItem={({item}) => (
              <ListItem
                mode={mode}
                item={item}
                requestClose={() => {
                  setLfaList(lfaList.filter(a => a != item));
                  data.filter(a => a != item);
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
    // backgroundColor: 'lightblue',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // backgroundColor: 'yellow',
    // justifyContent: 'space-between',
  },
  inputItem: {
    // marginRight: 'auto',
  },
  listContainer: {
    flex: 3,
    backgroundColor: '#FFFFFF',
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
