// LayoutManager.js
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LayoutManager from './LayoutManager';

export default function AddNewAttachmentScreen({route}) {
  const {type} = route.params;
  const navigation = useNavigation();

  const onSave = data => {
    console.log(data);
  };

  const onCancel = () => {
    console.log('cancel fired');
    navigation.navigate('attachments', {
      screen: 'attachments_screen',
    });
  };

  return <LayoutManager type={type} onSave={onSave} onCancel={onCancel} />;
}
