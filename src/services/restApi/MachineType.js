import API from './API';

const apiPrefix = '/machine_type';
export default MachineType = {
  getAll: async () => {
    try {
      const response = await API.get(`${apiPrefix}/getAll`);

      if (response.data.success) {
        return response.data.data.map(item => {
          const {_id, name} = item;

          return {
            type: name,
            id: _id,
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
};
