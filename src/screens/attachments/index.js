// LayoutManager.js
import React from 'react';
import {AttachmentsHandler} from '@services/restApi';
import LayoutManager from './LayoutManager';

export default function AttachmentsScreen() {
  const fetchData = async attachmentType => {
    var response = [];
    if (attachmentType === 'lfa') {
      response = await AttachmentsHandler.Lfa.getAll();
    } else {
      response = await AttachmentsHandler.Feeder.getAll();
    }

    return response;
  };
  AttachmentsHandler;
  return <LayoutManager fetchData={fetchData}/>;
}
