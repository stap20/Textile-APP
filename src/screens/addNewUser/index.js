// LayoutManager.js
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LayoutManager from './LayoutManager';

export default function AddNewUserScreen() {
  const navigation = useNavigation();

  const onSave = data => {
    console.log(data);
  };

  const onCancel = () => {
    console.log('cancel fired');
    navigation.navigate('users', {
      screen: 'users_screen',
    });
  };

  return <LayoutManager onSave={onSave} onCancel={onCancel} />;
}
