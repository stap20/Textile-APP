export default Machine = {
  getMachinesData: state => {
    var data = [
      {
        machineName: 'Machine-PAILUNG-1',
        machineNumber: 'A1900584',
        machineAddress: '08:3A:F2:8F:55:64',
        orderNumber: '#00001',
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
        orderNumber: '#00001',
        status: {state: 'working', reason: 'Needle'},
        stoppedHour: 36,
        workingHour: 36,
        speed: 15,
        numberOfRoll: 12,
        efficiency: 65,
        progress: 30,
      },
      {
        machineName: 'Machine-PAILUNG-3',
        machineNumber: 'A2800683',
        machineAddress: '08:3A:F2:AD:55:60',
        orderNumber: '#00002',
        status: {state: 'stop', reason: 'Needle'},
        stoppedHour: 36,
        workingHour: 36,
        speed: 15,
        numberOfRoll: 12,
        efficiency: 40,
        progress: 30,
      },
    ];

    data = data.filter(({status}) => status.state === state || state === 'all');

    return data;
  },
};
