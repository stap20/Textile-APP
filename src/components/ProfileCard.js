import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import userCardStyle from '@styles/components/profileCardStyle';
import StatusChip from './StatusChip';

export default function ProfileCard(props) {
  const {theme} = useTheme();
  const styles = userCardStyle(theme);

  const {
    name = 'profile1',
    type = 'single',
    noOfNeedles = 100,
    noOfFeeders = 96,
    noOfLfa = 3,
    coursws = 0.76,
    wales = 10,
    diameter = 40,
    machineName = null,
    onLongPress,
    style,
  } = props;

  var status = {state: machineName ? 'active' : 'inActive'};

  return (
    <TouchableOpacity style={[styles.container, style]} onLongPress={onLongPress}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <StatusChip status={status} statusType={'profile'} />
      </View>
      
      {machineName && (
        <View style={styles.machineContainer}>
          <View style={styles.dataContainer}>
            <Text style={styles.machineTitle}>Machine Name: </Text>
            <Text style={styles.machineName}>{machineName}</Text>
          </View>
        </View>
      )}
      
      <View style={styles.detailsContainer}>
        <View style={styles.leftColumn}>
          <View style={styles.dataContainer}>
            <Text style={styles.dataTitle}>Machine Type: </Text>
            <Text style={styles.data}>{type}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.dataTitle}>No. Feeder: </Text>
            <Text style={styles.data}>{noOfFeeders}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.dataTitle}>Coursws: </Text>
            <Text style={styles.data}>{coursws}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.dataTitle}>Diameter: </Text>
            <Text style={styles.data}>{diameter}m</Text>
          </View>
        </View>
        <View style={styles.rightColumn}>
          <View style={styles.dataContainer}>
            <Text style={styles.dataTitle}>Needles: </Text>
            <Text style={styles.data}>{noOfNeedles}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.dataTitle}>No. LFA: </Text>
            <Text style={styles.data}>{noOfLfa}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.dataTitle}>Wales: </Text>
            <Text style={styles.data}>{wales}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
