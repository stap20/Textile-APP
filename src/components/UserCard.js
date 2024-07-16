import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import userCardStyle from '@styles/components/userCardStyle';
import StatusChip from './StatusChip';
import CardSummaryChip from './CardSummaryChip';
import ProgressBar from './ProgressBar';
import Icon from './Icon';

function formatDate(dateString) {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  const day = date.getDate().toString().padStart(2, '0'); // Ensure two digits for day
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ensure two digits for month (month is zero-based)
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function UserCard(props) {
  const {theme} = useTheme();
  const styles = userCardStyle(theme);

  const {
    profileImage = 'path',
    name = 'User',
    username = 'user',
    privilege = 'user',
    ssn = '12345678910111',
    birthDate = new Date(),
    phoneNumber = '01111111111111',
    email = 'andy_cole90@Gmail.com',
    status = {state: 'offline'},
    style,
  } = props;

  var formattedBirthDay = formatDate(birthDate);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <View style={styles.userHeaderContainer}>
          <Image source={{uri: profileImage}} style={styles.profileImage} />

          <View style={styles.userNameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.userName}>{username}</Text>
          </View>
        </View>

        <StatusChip status={status} statusType={'user'} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsRow}>
          <View style={styles.dataContainer}>
            <View style={styles.dataSymbolContainer}>
              <Icon iconName={'user-privilege'} />
            </View>

            <View style={styles.dataWrapper}>
              <Text style={styles.dataTitle}>{privilege}</Text>
              <Text style={styles.dataType}>Privilege</Text>
            </View>
          </View>

          <View style={styles.dataContainer}>
            <View style={styles.dataSymbolContainer}>
              <Icon iconName={'user-ssn'} />
            </View>

            <View style={styles.dataWrapper}>
              <Text style={styles.dataTitle}>{ssn}</Text>
              <Text style={styles.dataType}>S/N</Text>
            </View>
          </View>
        </View>

        <View style={styles.detailsRow}>
          <View style={styles.dataContainer}>
            <View style={styles.dataSymbolContainer}>
              <Icon iconName={'user-birthday'} />
            </View>

            <View style={styles.dataWrapper}>
              <Text style={styles.dataTitle}>{formattedBirthDay}</Text>
              <Text style={styles.dataType}>Birthdate</Text>
            </View>
          </View>

          <View style={styles.dataContainer}>
            <View style={styles.dataSymbolContainer}>
              <Icon iconName={'user-phone'} />
            </View>

            <View style={styles.dataWrapper}>
              <Text style={styles.dataTitle}>{phoneNumber}</Text>
              <Text style={styles.dataType}>Mobile Number</Text>
            </View>
          </View>
        </View>

        <View style={[styles.detailsRow, {marginBottom: 0}]}>
          <View style={styles.dataContainer}>
            <View style={styles.dataSymbolContainer}>
              <Icon iconName={'user-email'} />
            </View>

            <View style={styles.dataWrapper}>
              <Text style={styles.dataTitle}>{email}</Text>
              <Text style={styles.dataType}>E-mail</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
