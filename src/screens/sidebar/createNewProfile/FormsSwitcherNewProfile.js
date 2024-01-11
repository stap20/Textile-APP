import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import convertPxToDp from '@utils/ConvertPxToDp';
import TextProfileInput from './TextProfileInput';
import MachineDetailsBody from './MachineDetailsBody';
import NeedlesBody from './NeedlesBody';
import FeederBody from './FeederBody';

function NotFound(name) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'red', fontSize: convertPxToDp(84)}}>
        {name} Not Found
      </Text>
    </View>
  );
}

export default function FormsSwitcherNewProfile({name, onChange}) {
  const forms = [
    'MachineDetails',
    <MachineDetailsBody onChange={onChange} />,
    'Needles',
    <NeedlesBody onChange={onChange} />,
    'Feeder',
    <FeederBody onChange={onChange} />,
    'LFA',
    // <LFABody onChange={onChange} />,
  ];

  if (forms.indexOf(name) > -1) {
    return forms[forms.indexOf(name) + 1];
  } else {
    return NotFound(name);
  }
}
