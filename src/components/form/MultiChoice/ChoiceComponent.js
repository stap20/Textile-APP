import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {choicesStyle} from '@styles/components/form';

export default function ChoiceComponent({name, onPress, isSelected}) {
  const [selected, setSelected] = useState(isSelected);
  const onClick = () => {
    onPress();
  };

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  return (
    <TouchableOpacity
      style={[
        choicesStyle().choiceContainer,
        {backgroundColor: selected ? 'rgba(60, 68, 70, 1)' : '#FFFFFF'},
      ]}
      onPress={() => onClick()}>
      <Text
        style={[
          choicesStyle().choiceText,
          {color: !selected ? 'rgba(60, 68, 70, 1)' : '#FFFFFF'},
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
