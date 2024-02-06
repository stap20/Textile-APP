import {prepareDuration} from '@utils';

export default Machine = {
  getOrdersHistory: machineNumber => {
    var data = [
      {
        orderNumber: '#00001',
        startDate: new Date(2023, 9 - 1, 26),
        endDate: new Date(2023, 10 - 1, 26),
        stoppedHour: 36,
        workingHour: 36,
        numberOfRoll: 12,
        efficiency: 80,
      },
      {
        orderNumber: '#00002',
        startDate: new Date(2023, 9 - 1, 26),
        endDate: new Date(2023, 10 - 1, 26),
        stoppedHour: 36,
        workingHour: 36,
        numberOfRoll: 12,
        efficiency: 80,
      },
      {
        orderNumber: '#00002',
        startDate: new Date(2023, 9 - 1, 26),
        endDate: new Date(2023, 10 - 1, 26),
        stoppedHour: 70,
        workingHour: 36,
        numberOfRoll: 12,
        efficiency: 45,
      },
    ];

    return data.map((item, idx) => {
      const {startDate, endDate, ...other} = item;

      return {
        startDate:
          startDate.getDate() +
          ' / ' +
          (startDate.getMonth() + 1) +
          ' / ' +
          startDate.getFullYear(),
        endDate:
          endDate.getDate() +
          ' / ' +
          (endDate.getMonth() + 1) +
          ' / ' +
          endDate.getFullYear(),
        ...other,
      };
    });
  },

  getMachineStopsData: machineNumber => {
    return [
      {
        orderNumber: '#00001',
        status: {state: 'stop', reason: 'Feeder'},
        duration: prepareDuration(70),
        progress: 60,
      },
      {
        orderNumber: '#00001',
        status: {state: 'stop', reason: 'Needle'},
        duration: prepareDuration(40),
        progress: 45,
      },
      {
        orderNumber: '#00002',
        status: {state: 'stop', reason: 'Gate'},
        duration: prepareDuration(10),
        progress: 12,
      },
    ];

  },
};
