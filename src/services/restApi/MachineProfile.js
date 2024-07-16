import API from './API';
import {ToastCaller} from '@utils';

const apiPrefix = '/machine_profile';

export default MachineProfile = {
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
          const {_id, machineName, ...other} = item;
          const machineNameOrNull =
            machineName !== undefined ? machineName : null;

          return {
            id: _id,
            machineName: machineNameOrNull,
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
