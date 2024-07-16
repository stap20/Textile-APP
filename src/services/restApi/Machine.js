import API from './API';
import {ToastCaller} from '@utils';

const apiPrefix = '/machine';

function getReason(type) {
  const reasons = {
    COMPLETE_ROLL: "Complete Roll",
    FEEDER: "Feeder",
    GATE: "Gate",
    IDLE: "Idle",
    NEEDLE: "Needle",
  };

  return reasons[type];
}

export default Machine = {
  create: async ({data}) => {
    try {
      const response = await API.post(`${apiPrefix}/create`, data);

      if (!response.data.success) {
        ToastCaller('error', 'Issue found please try again');
        return false;
      }

      ToastCaller('success', response.data.message);
      return response.data.success;
    } catch (error) {
      console.error('Error:', error);
      ToastCaller('error', 'Issue found please try again');
      return false;
    }
  },

  getAll: async () => {
    try {
      const response = await API.get(`${apiPrefix}/getAll`);

      if (response.data.success) {
        return response.data.data.map(item => {
          const {_id, model,isStopped,stopReason,stoppedHours, ...other} = item;

          return {
            id: _id,
            machineNumber: model,
            status:isStopped ? {state:"stop",reason:getReason(stopReason)} : {state:'working'},
            stoppedHour:stoppedHours,
            workingHour:workingHours
            ...other,
          };
        });
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  },

  delete: async id => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      const data = {id};
      const response = await API.post(`${apiPrefix}/delete`, data, config);
      ToastCaller('success', response.data.message);
      return response.data.success;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  },
};
