import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@theme/ThemeProvider';

export default function HomeScreen() {
  const {t} = useTranslation('home');
  const {themeStyles} = useTheme();

  return (
    <View
      style={{
        backgroundColor: themeStyles.colors.background,
        height: '100%',
      }}>
      <Text style={{color: themeStyles.colors.text}}>
        {t('Welcome to React')}
      </Text>
    </View>
  );
}
