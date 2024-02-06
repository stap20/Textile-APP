import {prepareDuration} from '@utils';

export default Machines = {
  getMachinesData: orderNumber => {
    return [
      {
        machineName: 'Machine-PAILUNG-1',
        machineNumber: 'A1900584',
        machineAddress: '08:3A:F2:8F:55:64',
        status: {state: 'working', reason: 'Needle'},
        stoppedHour: 36,
        workingHour: 36,
        speed: 15,
        numberOfRoll: 12,
        efficiency: 80,
        progress: 30,
      },
      {
        machineName: 'Machine-PAILUNG-2',
        machineNumber: 'A2800682',
        machineAddress: '08:3A:F2:AD:55:30',
        status: {state: 'stop', reason: 'Needle'},
        stoppedHour: 36,
        workingHour: 36,
        speed: 15,
        numberOfRoll: 12,
        efficiency: 80,
        progress: 30,
      },
      {
        machineName: 'Machine-PAILUNG-3',
        machineNumber: 'A2800683',
        machineAddress: '08:3A:F2:AD:55:60',
        status: {state: 'stop', reason: 'Needle'},
        stoppedHour: 36,
        workingHour: 36,
        speed: 15,
        numberOfRoll: 12,
        efficiency: 80,
        progress: 30,
      },
    ];
  },

  getMachinesStopsData: orderNumber => {
    return [
      {
        machineName: 'Machine-PAILUNG-2',
        machineNumber: 'A2800682',
        status: {state: 'stop', reason: 'Needle'},
        duration: prepareDuration(70),
        numberOfRoll: 12,
        efficiency: 80,
        progress: 30,
      },
      {
        machineName: 'Machine-PAILUNG-2',
        machineNumber: 'A2800682',
        status: {state: 'stop', reason: 'Gate'},
        duration: prepareDuration(40),
        numberOfRoll: 12,
        efficiency: 80,
        progress: 30,
      },
      {
        machineName: 'Machine-PAILUNG-3',
        machineNumber: 'A2800683',
        status: {state: 'stop', reason: 'Feeder'},
        duration: prepareDuration(10),
        numberOfRoll: 12,
        efficiency: 80,
        progress: 30,
      },
    ];
  },
};
