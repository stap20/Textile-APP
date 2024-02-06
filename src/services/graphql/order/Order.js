export default Order = {
  getOrdersData: state => {
    var data = [
      {
        orderNumber: '#00001',
        status: {state: 'inprogress', reason: 'Needle'},
        startDate: new Date(2023, 9 - 1, 26),
        endDate: new Date(2023, 10 - 1, 26),
        stoppedHour: 36,
        workingHour: 36,
        numberOfMachines: 10,
        finishedQuan: 15,
        totalQuan: 50,
      },
      {
        orderNumber: '#00002',
        status: {state: 'finish', reason: 'Needle'},
        startDate: new Date(2023, 9 - 1, 26),
        endDate: new Date(2023, 10 - 1, 26),
        stoppedHour: 36,
        workingHour: 36,
        numberOfMachines: 10,
        finishedQuan: 15,
        totalQuan: 50,
      },
      {
        orderNumber: '#00003',
        status: {state: 'pending', reason: 'Needle'},
        startDate: new Date(2023, 9 - 1, 26),
        endDate: new Date(2023, 10 - 1, 26),
        stoppedHour: 36,
        workingHour: 36,
        numberOfMachines: 10,
        finishedQuan: 15,
        totalQuan: 50,
      },
      {
        orderNumber: '#00004',
        status: {state: 'pending', reason: 'Needle'},
        startDate: new Date(2023, 9 - 1, 26),
        endDate: new Date(2023, 10 - 1, 26),
        stoppedHour: 36,
        workingHour: 36,
        numberOfMachines: 10,
        finishedQuan: 15,
        totalQuan: 50,
      },
      {
        orderNumber: '#00005',
        status: {state: 'finish', reason: 'Needle'},
        startDate: new Date(2023, 9 - 1, 26),
        endDate: new Date(2023, 10 - 1, 26),
        stoppedHour: 36,
        workingHour: 36,
        numberOfMachines: 10,
        finishedQuan: 15,
        totalQuan: 50,
      },
      {
        orderNumber: '#00006',
        status: {state: 'finish', reason: 'Needle'},
        startDate: new Date(2023, 9 - 1, 26),
        endDate: new Date(2023, 10 - 1, 26),
        stoppedHour: 36,
        workingHour: 36,
        numberOfMachines: 10,
        finishedQuan: 15,
        totalQuan: 50,
      },
    ];

    data = data.filter(({status})=>(status.state === state || state === "all"))

    return data.map((item, idx) => {
      const {finishedQuan, totalQuan, startDate, endDate, ...other} = item;

      return {
        progress: parseInt((finishedQuan / totalQuan) * 100),
        progressDetails: `${item.finishedQuan} / ${item.totalQuan}`,
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
};
