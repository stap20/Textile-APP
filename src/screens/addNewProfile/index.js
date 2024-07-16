// LayoutManager.js
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LayoutManager from './LayoutManager';
import {MachineProfileHandler} from '@services/restApi';

export default function AddNewProfileScreen() {
  const navigation = useNavigation();

  const onSave = rawData => {
    console.log(data);

    const data = {
      profileData: {
        profileName: rawData.profileName,
        coursws: rawData.courses,
        wales: rawData.wales,
        diameter: rawData.diameter,
        noOfneedles: rawData.numberOfNeedles,
      },

      feederList: rawData.feederList.map(({feeder, ...other}) => ({
        id: feeder.id,
        ...other,
      })),

      lfaList: rawData.lfaList.map(({id}) => id),

      machineTypeId: rawData.machineType.id,
    };

    MachineProfileHandler.create({data}).then(res => {
      navigation.navigate('profiles', {
        screen: 'profiles_screen',
      });
    });
  };

  const onCancel = () => {
    console.log('cancel fired');
    navigation.navigate('profiles', {
      screen: 'profiles_screen',
    });
  };

  return <LayoutManager onSave={onSave} onCancel={onCancel} />;
}
