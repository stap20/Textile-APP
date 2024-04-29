// LayoutManager.js
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LayoutManager from './LayoutManager';

export default function AddNewOrderScreen() {
  const navigation = useNavigation();

  const onLogin = data => {
    console.log('Login');
  };

  const onSingup = data => {
    console.log('Sign Up');
  };

  return <LayoutManager onLogin={onLogin} onSingup={onSingup} />;
}
