import {React, useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import convertPxToDp from '@utils/ConvertPxToDp';
import {LinearProgress} from 'react-native-elements';

const itemProgressBarJSX = (n, activeLvl) => {
  if (activeLvl > n) {
    throw console.error('ActiveLvl is larger than n');
  }

  let out = [];
  for (let i = 1; i <= n; i++) {
    if (activeLvl == i) {
      out.push(
        <View
          key={i}
          style={[styles.numsContainer, {backgroundColor: '#3C4446'}]}>
          <Text style={[styles.numText, {color: 'white'}]}>{i}</Text>
        </View>,
      );
    } else {
      out.push(
        <View style={[styles.numsContainer]}>
          <Text style={[styles.numText]}>{i}</Text>
        </View>,
      );
    }

    if (i <= n - 1) {
      // console.log('hi');
      out.push(
        <View key={i + 1} style={styles.linearContainer}>
          <LinearProgress
            color="#3C4446" // temp
            trackColor="#E9E9E9" // temp
            value={activeLvl == i ? 0.5 : 0}
            variant="determinate"
            style={{
              height: convertPxToDp(15),
            }}
          />
        </View>,
      );
    }
  }

  activeLvlIndex = activeLvl + (activeLvl - 1);
  for (let i = 0; i < activeLvlIndex - 1; i += 2) {
    console.log(i);
    out[i] = (
      <View
        key={i}
        style={[styles.numsContainer, {backgroundColor: '#3C4446'}]}>
        <Text style={[styles.numText, {color: 'white'}]}>Done{i}</Text>
      </View>
    );
    out[i + 1] = (
      <View key={i + 1} style={styles.linearContainer}>
        <LinearProgress
          color="#3C4446" // temp
          trackColor="#E9E9E9" // temp
          value={1}
          variant="determinate"
          style={{
            height: convertPxToDp(15),
          }}
        />
      </View>
    );
  }
  return out;
};

export default function ProgressBar({maxLvls, activeLvl}) {
  return (
    <View style={styles.container} key={activeLvl}>
      {itemProgressBarJSX(maxLvls, activeLvl)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: convertPxToDp(43),
    borderBottomColor: '#EBECEC',
    borderBottomWidth: convertPxToDp(3),
  },
  numsContainer: {
    height: convertPxToDp(61),
    width: convertPxToDp(61),
    borderRadius: convertPxToDp(999),
    backgroundColor: '#EBECEC' || '#3C4446',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: convertPxToDp(100),
    marginHorizontal: convertPxToDp(30),
  },
});
