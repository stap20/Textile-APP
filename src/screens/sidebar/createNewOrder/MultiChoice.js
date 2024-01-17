import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {convertPxToDp} from '@utils';

function ItemComponent({name, unSelect}) {
  return (
    <View style={styles.itemContaienr}>
      <Text style={styles.itemText}>{name}</Text>
      <TouchableOpacity
        onPress={() => unSelect()}
        style={{
          width: convertPxToDp(12.5),
          height: convertPxToDp(12.5),
          backgroundColor: 'orange',
        }}></TouchableOpacity>
    </View>
  );
}

function ChoiceComponent({name, onPress}) {
  const [selected, setSelected] = useState(false);
  const onClick = () => {
    onPress();
    setSelected(!selected);
  };

  return (
    <TouchableOpacity
      style={[
        choices.choiceContainer,
        {backgroundColor: selected ? 'rgba(60, 68, 70, 1)' : '#FFFFFF'},
      ]}
      onPress={() => onClick()}>
      <Text
        style={[
          choices.choiceText,
          {color: !selected ? 'rgba(60, 68, 70, 1)' : '#FFFFFF'},
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const example = [
  {id: '1', name: 'Machine 1'},
  {id: '2', name: 'Machine 2'},
  {id: '3', name: 'Machine 3'},
  {id: '4', name: 'Machine 4'},
  {id: '5', name: 'Machine 5'},
];

export default function MultiChoice({
  contentContainerStyle,
  onSelect,
  onUnselect,
}) {
  const [selected, setSelected] = useState([]);
  const [showChoices, setShowChoices] = useState(false);

  const showChoice = () => {
    setShowChoices(!showChoices);
  };

  const toggleSelected = element => {
    if (selected.includes(element)) {
      // Removing
      setSelected(selected.filter(a => a.id != element.id));
      onUnselect(element);
      return false;
    } else {
      // Adding
      setSelected([...selected, element]);
      onSelect(element);
      return true;
    }
  };

  const isSelected = element => {
    return selected.includes(element);
  };

  return (
    <View style={[styles.container, contentContainerStyle]}>
      <View style={[styles.selectedContainer, contentContainerStyle]}>
        <View style={styles.itemsContaienr}>
          {selected.map(element => (
            <ItemComponent
              name={element.name}
              key={element.id}
              unSelect={() =>
                setSelected(selected.filter(a => a.id != element.id))
              }
            />
          ))}
        </View>
        <View style={styles.selectBtnContainer}>
          <TouchableOpacity
            onPress={() => showChoice()}
            style={{
              width: convertPxToDp(41),
              height: convertPxToDp(41),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: convertPxToDp(20),
                height: convertPxToDp(20),
                backgroundColor: 'orange',
              }}></View>
          </TouchableOpacity>
        </View>
      </View>
      {showChoices && (
        <FlatList
          style={choices.container}
          contentContainerStyle={choices.choicesContaienr}
          data={example}
          renderItem={({item}) => (
            <ChoiceComponent
              name={item.name}
              id={item.id}
              onPress={() => toggleSelected(item)}
            />
          )}
          keyExtractor={item => item.id}
        />
        // <ScrollView style={choices.container}>
        //   <View style={choices.choicesContaienr}>
        //     {example.map(element => (
        //       <ChoiceComponent
        //         name={element.name}
        //         id={element.id}
        //         onPress={() => toggleSelected(element)}
        //       />
        //     ))}
        //   </View>
        // </ScrollView>
      )}
    </View>
  );
}

const choices = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    backgroundColor: 'white',
    // minWidth: convertPxToDp(307),
    // maxWidth: convertPxToDp(638 + 38 + 40),
    // minHeight: convertPxToDp(65),
    // maxHeight: convertPxToDp(204),
    borderRadius: convertPxToDp(20),
    borderWidth: convertPxToDp(3),
    borderColor: '#EBECEC',
    padding: convertPxToDp(10),
    // gap: convertPxToDp(20),
  },
  choicesContaienr: {
    // backgroundColor: 'red',
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    // alignItems: 'center',
    gap: convertPxToDp(20),
    // marginRight: 'auto',
    paddingBottom: convertPxToDp(20),
  },
  choiceContainer: {
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(60, 68, 70, 0.2)', // TODO:
    width: '100%',
    // height: convertPxToDp(45),
    borderRadius: convertPxToDp(12),
    paddingVertical: convertPxToDp(8),
    paddingLeft: convertPxToDp(13),
  },
  choiceText: {
    fontSize: convertPxToDp(20),
    lineHeight: convertPxToDp(40),
    fontWeight: '400',
    color: '#3C4446', // TODO:
  },
});

const styles = StyleSheet.create({
  container: {
    gap: convertPxToDp(5),
  },
  selectedContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    minWidth: convertPxToDp(307),
    maxWidth: convertPxToDp(638 + 38 + 40),
    minHeight: convertPxToDp(65),
    borderRadius: convertPxToDp(20),
    borderWidth: convertPxToDp(3),
    borderColor: '#EBECEC',
    padding: convertPxToDp(10),
  },
  selectBtnContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'red',
    // paddingTop: convertPxToDp(12),
  },

  itemsContaienr: {
    // backgroundColor: 'lightblue',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    gap: convertPxToDp(10),
    marginRight: 'auto',
  },
  itemContaienr: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(60, 68, 70, 0.2)', // TODO:
    width: convertPxToDp(149),
    height: convertPxToDp(45),
    borderRadius: convertPxToDp(12),
  },
  itemText: {
    fontSize: convertPxToDp(20),
    lineHeight: convertPxToDp(40),
    fontWeight: '400',
    color: '#3C4446', // TODO:
  },
});
