// Header.js
import React from 'react';
import FeederForm from './FeederForm';
import LfaForm from './LfaForm';

export default function FormView({type, onSave, onCancel}) {
  return type === 'lfa' ? (
    <LfaForm onSave={onSave} onCancel={onCancel} />
  ) : (
    <FeederForm onSave={onSave} onCancel={onCancel} />
  );
}
