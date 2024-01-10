import React from 'react';
import {StyleSheet, View} from 'react-native';
import convertPxToDp from '@utils/ConvertPxToDp';

const forms = ['MachineDetails'];

function NotFound() {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={{color: 'red', fontSize: convertPxToDp(36)}}>Not Found</Text>
    </View>
  );
}

function MachineDetails() {
  const selfStyle = styles.MachineDetails;
  return <View style={selfStyle.container}></View>;
}

const styles = {
  MachineDetails: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
    },
  }),
};

export default function FormsSwitcherNewProfile({name}) {
  console.log('ssss');
  //   if (forms.includes(name)) {
  //     return forms.find(e => e == name);
  //   } else {
  //     return NotFound();
  //   }
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={{color: 'red', fontSize: convertPxToDp(36)}}>Not Found</Text>
    </View>
  );
}
