// LayoutManager.js
import React from 'react';
import LayoutManager from './LayoutManager';
import {MachineProfileHandler} from '@services/restApi';

export default function ProfilesScreen() {
  const fetchData = async () => {
    const response = await MachineProfileHandler.getAll();

    return response;
  };

  const deleteMachineProfile = async (id) => {
    const res = await MachineProfileHandler.delete(id);

    return res;
  };

  return (
    <LayoutManager
      fetchData={fetchData}
      deleteMachineProfile={deleteMachineProfile}
    />
  );
}
