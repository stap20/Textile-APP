// LayoutManager.js
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AttachmentsHandler} from '@services/restApi';
import LayoutManager from './LayoutManager';

export default function AddNewAttachmentScreen({route}) {
  const {type} = route.params;
  const navigation = useNavigation();

  const onSave = data => {
    const createFunction =
      type === 'lfa'
        ? AttachmentsHandler.Lfa.create
        : AttachmentsHandler.Feeder.create;

    createFunction(data).then(res => {
      navigation.navigate('attachments', {
        screen: 'attachments_screen',
      });
    });
    console.log(data);
  };

  const onCancel = () => {
    navigation.navigate('attachments', {
      screen: 'attachments_screen',
    });
  };

  return <LayoutManager type={type} onSave={onSave} onCancel={onCancel} />;
}
