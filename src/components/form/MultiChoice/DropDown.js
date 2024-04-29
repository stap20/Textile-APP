import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {convertPxToDp} from '@utils';
import {useTheme} from '@theme/ThemeProvider';
import {Icon} from '@components';
import {choicesStyle, newDropDownStyle} from '@styles/components/form';
import ItemComponent from './ItemComponent';
import ChoiceComponent from './ChoiceComponent';
let dropDownstyles = null;

export default function DropDown({
  style = {},
  onChange,
  options = example,
  value,
  placeholder,
}) {
  const {theme} = useTheme();
  dropDownstyles = newDropDownStyle(theme);

  const [selected, setSelected] = useState([]);
  const [showChoices, setShowChoices] = useState(false);

  const showChoice = () => {
    setShowChoices(!showChoices);
  };

  const toggleSelected = element => {
    if (selected.includes(element)) {
      // Removing
      doUnSelect(element);
      return false;
    } else {
      // Adding
      doSelect(element);
      return true;
    }
  };

  const doSelect = element => {
    setSelected([...selected, element]);
    onChange([...selected, element]);
  };
  const doUnSelect = element => {
    console.log('1');
    setSelected(selected.filter(a => a.id != element.id));
    onChange(selected.filter(a => a.id != element.id));
  };

  return (
    <View style={[dropDownstyles.container, style]}>
      <View style={[dropDownstyles.selectedContainer, style]}>
        <View style={dropDownstyles.itemsContaienr}>
          {selected.length <= 0 ? (
            <Text style={dropDownstyles.placeholderText}>{placeholder}</Text>
          ) : (
            <></>
          )}
          {selected.map(element => (
            <ItemComponent
              name={element.name}
              key={element.id}
              unSelect={() => doUnSelect(element)}
            />
          ))}
        </View>
        <View style={dropDownstyles.selectBtnContainer}>
          <TouchableOpacity
            onPress={() => showChoice()}
            style={{
              width: convertPxToDp(41),
              height: convertPxToDp(41),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon iconName={showChoices ? 'arrow-up' : 'arrow-down'} />
          </TouchableOpacity>
        </View>
      </View>
      {showChoices && (
        <FlatList
          style={choicesStyle().container}
          contentContainerStyle={choicesStyle().choicesContaienr}
          data={options}
          renderItem={({item}) => (
            <ChoiceComponent
              name={item.name}
              id={item.id}
              onPress={() => toggleSelected(item)}
              isSelected={() => selected.includes(item)}
            />
          )}
          keyExtractor={item => item.id}
          scrollEnabled={true}
        />
      )}
    </View>
  );
}
