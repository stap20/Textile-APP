import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

const Sidebar = ({toggleLayout, selectScreen, toggleTheme}) => {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('Sidola')}</Text>
      <Button title="Toggle Layout" onPress={toggleLayout} />
      <Button
        title="Home"
        onPress={() => {
          selectScreen('Home');
        }}
      />
      <Button
        title="Side"
        onPress={() => {
          selectScreen('Side');
        }}
      />
      <Button
        title="Orders"
        onPress={() => {
          selectScreen('Orders');
        }}
      />
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

export default Sidebar;
