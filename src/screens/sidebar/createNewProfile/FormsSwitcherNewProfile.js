import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import convertPxToDp from '@utils/ConvertPxToDp';
import TextProfileInput from './TextProfileInput';
import MachineDetailsBody from './MachineDetailsBody';
import NeedlesBody from './NeedlesBody';
import FeederBody from './FeederBody';
import LFABody from './LFABody';

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

export default function FormsSwitcherNewProfile({name, onChange, mode}) {
  const forms = [
    'MachineDetails',
    <MachineDetailsBody onChange={onChange} mode={mode} />,
    'Needles',
    <NeedlesBody onChange={onChange} mode={mode} />,
    'Feeder',
    <FeederBody onChange={onChange} mode={mode} />,
    'LFA',
    <LFABody onChange={onChange} mode={mode} />,
  ];

  if (forms.indexOf(name) > -1) {
    return forms[forms.indexOf(name) + 1];
  } else {
    return NotFound(name);
  }
}
