// LayoutManager.js
import React from 'react';
import LayoutManager from './LayoutManager';

export default function OrderProfile({route}) {
  const {orderNumber} = route.params;

  return <LayoutManager orderNumber={orderNumber} />;
}
