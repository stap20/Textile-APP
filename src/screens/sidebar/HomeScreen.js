import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import LocalizationManager from '@localization/LocalizationManager';
import {useTheme} from '@theme/ThemeProvider';

const HomeScreen = () => {
  const {t} = useTranslation('home');
  const {themeStyles} = useTheme();

  return (
    <View
      style={{
        backgroundColor: themeStyles.colors.homeScreen.background,
        height: '100%',
      }}>
      <Text style={{color: themeStyles.colors.homeScreen.text}}>
        {t('Welcome to React')}
      </Text>
    </View>
  );
};

export default HomeScreen;
