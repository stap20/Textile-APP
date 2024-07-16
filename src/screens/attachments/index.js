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

  const deleteAttachment = async (attachmentType, id) => {
    var res = false;
    if (attachmentType === 'lfa') {
      res = await AttachmentsHandler.Lfa.delete(id);
    } else {
      res = await AttachmentsHandler.Feeder.delete(id);
    }

    return res;
  };

  return (
    <LayoutManager fetchData={fetchData} deleteAttachment={deleteAttachment} />
  );
}
