export default Statistics = {
  getOrderSummary: orderNumber => {
    return {
      stopDurationMinutes: 270,
      workingDurationMinutes: 2700,
      idleDurationMinutes: 530,
      totalDurationMinutes: 3500,
      inProgressMachines: 5,
      pendingMachines: 3,
      completeRolls: 317,
    };
  },

  getProductionData: orderNumber => {
    return {
      xAxis: [
        '02-JAN',
        '09-JAN',
        '16-JAN',
        '02-FAB',
        '09-FAB',
        '16-FAB',
        '02-MAR',
        '09-MAR',
        '16-MAR',
        '02-APR',
        '09-APR',
      ],
      data: [10, 20, 30, 5, 50, 7, 35, 40, 40, 60, 20],
    };
  },

  getMachinesProductionData: orderNumber => {
    return [
      {value: 100, name: 'Machine 1', id: 'm1'},
      {value: 60, name: 'Machine 2', id: 'm2'},
      {value: 40, name: 'Machine 3', id: 'm3'},
      {value: 80, name: 'Machine 4', id: 'm4'},
      {value: 37, name: 'Machine 5', id: 'm5'},
    ];
  },

  getMachinesEfficiencyData: orderNumber => {
    return {
      xAxis: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Machine 5'],
      data: [80, 20, 95, 70, 45],
    };
  },
};
