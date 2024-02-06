export default Statistics = {
  getMachineSummary: machineNumber => {
    return {
      stopDurationMinutes: 12710,
      workingDurationMinutes: 43868,
      idleDurationMinutes: 7224,
      totalDurationMinutes: 63802,
      machineSpeed: 21,
      feederSpeed: 1339,
      efficiency: 80,
      completeRolls: 567,
    };
  },

  getProductionData: machineNumber => {
    return {
      xAxis: [
        '02-Jan',
        '09-Jan',
        '16-Jan',
        '23-Jan',
        '30-Jan',
        '06-Feb',
        '13-Feb',
        '20-Feb',
        '06-Mar',
        '13-Mar',
        '20-Mar',
        '27-Mar',
        '03-Apr',
        '10-Apr',
        '17-Apr',
        '24-Apr',
        '01-May',
        '08-May',
        '15-May',
        '22-May',
        '29-May',
        '05-Jun',
      ],

      minProdData: [
        3.99, 3.55, 4.06, 4.48, 4.45, 3.28, 3.26, 4.52, 4.74, 4.71, 4.7, 4.7,
        4.87, 4.71, 4.58, 4.72, 4.73, 4.7, 4.74, 4.87, 4.8, 4.73,
      ],
      minIdealProdData: [
        5.26, 4.67, 5.34, 5.89, 5.85, 4.31, 4.29, 5.95, 6.24, 6.2, 6.18, 6.19,
        6.41, 6.2, 6.02, 6.21, 6.19, 6.18, 6.23, 6.41, 6.32, 6.23,
      ],
      maxProdData: [
        4.71, 6.48, 6.46, 6.51, 6.52, 6.46, 7.12, 7.11, 5.8, 6.46, 6.9, 6.69,
        6.7, 8.24, 7.6, 8.69, 7.6, 7.82, 8.25, 8.06, 8.76, 8.11,
      ],
      maxIdealProdData: [
        6.2, 8.52, 8.5, 8.56, 8.57, 8.51, 9.36, 9.36, 7.63, 8.51, 9.08, 8.8,
        8.81, 10.85, 9.99, 11.43, 9.99, 10.29, 10.85, 10.61, 11.52, 10.67,
      ],
    };
  },

  getMachinesStopsData: machineNumber => {
    return [
      {duration: 1708, number: 567, name: 'Complete Roll', id: 'COMPLETE_ROLL'},
      {duration: 10128, number: 1665, name: 'Feeder', id: 'FEEDER'},
      {duration: 854, number: 1299, name: 'Gate', id: 'GATE'},
      {duration: 7224, number: 723, name: 'Idle', id: 'IDLE'},
      {duration: 20, number: 10, name: 'Needle', id: 'NEEDLE'},
    ];
  },

  getMachineSpeedData: machineNumber => {
    return {
      xAxis: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],

      minYarnSpeed: [
        658, 796, 871, 849, 872, 878, 658, 796, 871, 849, 872, 878,
      ],
      minMachineSpeed: [10, 12, 13, 13, 13, 13, 10, 12, 13, 13, 13, 13],
      maxYarnSpeed: [
        1209, 1320, 1280, 1611, 1624, 1504, 1209, 1320, 1280, 1611, 1624, 1504,
      ],
      maxMachineSpeed: [19, 21, 20, 25, 25, 23, 19, 21, 20, 25, 25, 23],
    };
  },

  getMachinesEfficiencyData: orderNumber => {
    return {
      xAxis: ['Complete Roll', 'Feeder', 'Gate', 'Idle', 'Needle'],
      data: [80, 20, 95, 70, 45],
    };
  },
};
