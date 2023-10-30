import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import LocalizationManager from '@localization/LocalizationManager';

const HomeScreen = () => {
  const {t} = useTranslation('home');

  return (
    <View>
      <Text>{t('Welcome to React')}</Text>
    </View>
  );
};

export default HomeScreen;
