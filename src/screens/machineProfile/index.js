// LayoutManager.js
import React from 'react';
import LayoutManager from './LayoutManager';

export default function MachineProfile({route}) {
  const {MachineNumber} = route.params;

  return <LayoutManager MachineNumber={MachineNumber} />;
}
