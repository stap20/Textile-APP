import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {translator} from '@localization/Translator';
import {useTheme} from '@theme/ThemeProvider';

export default function HomeScreen() {
  const {theme} = useTheme();

  const translate = str => {
    return translator('home', str);
  };

  return (
    <View
      style={{
        height: '100%',
      }}>
      <Text style={{color: theme.colors.text}}>
        {translate('Welcome to React')}
      </Text>
    </View>
  );
}
