export default Attachments = {
  getAttachmentsData: type => {
    var data = {
      feeder: [
        {
          type: 'Feeder-1',
          diameter: 9,
        },
        {
          type: 'Feeder-2',
          diameter: 4.5,
        },
        {
          type: 'Feeder-3',
          diameter: 3.5,
        },
        {
          type: 'Feeder-4',
          diameter: 5,
        },
        {
          type: 'Feeder-5',
          diameter: 5.6,
        },
      ],
      lfa: [
        {
          type: 'LFA-1',
          diameter: 9,
        },
        {
          type: 'LFA-2',
          diameter: 4.5,
        },
        {
          type: 'LFA-3',
          diameter: 3.5,
        },
        {
          type: 'LFA-4',
          diameter: 5,
        },
        {
          type: 'LFA-5',
          diameter: 5.9,
        },
      ],
    };

    return data[type] || {feeder: [], lfa: []};
  },
};
