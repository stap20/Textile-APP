import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import {useTranslation} from 'react-i18next';
import LocalizationManager from '@localization/LocalizationManager';

const SidebarScreen = () => {
  const {t} = useTranslation('test');

  return (
    <View>
      <Text>{t('Sidola')}</Text>
    </View>
  );
};

export default SidebarScreen;
