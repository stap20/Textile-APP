export default Users = {
  getUsersData: () => {
    var data = [
      {
        profileImage:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Andy Cole',
        username: 'Andy90',
        privilege: 'System Admin',
        ssn: '12345678910111',
        birthDate: new Date('1990-10-13'),
        phoneNumber: '01111111111111',
        email: 'andy_cole90@Gmail.com',
        status: 'online',
      },
      {
        profileImage:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Andy90',
        privilege: 'System Admin',
        ssn: '12345678910111',
        birthDate: new Date('1990-10-13'),
        phoneNumber: '01111111111111',
        email: 'andy_cole90@Gmail.com',
        status: 'offline',
      },
      {
        profileImage:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Andy90',
        privilege: 'System Admin',
        ssn: '12345678910111',
        birthDate: new Date('1990-10-13'),
        phoneNumber: '01111111111111',
        email: 'andy_cole90@Gmail.com',
        status: 'offline',
      },
      {
        profileImage:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Andy90',
        privilege: 'System Admin',
        ssn: '12345678910111',
        birthDate: new Date('1990-10-13'),
        phoneNumber: '01111111111111',
        email: 'andy_cole90@Gmail.com',
        status: 'offline',
      },
      {
        profileImage:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Andy90',
        privilege: 'System Admin',
        ssn: '12345678910111',
        birthDate: new Date('1990-10-13'),
        phoneNumber: '01111111111111',
        email: 'andy_cole90@Gmail.com',
        status: 'offline',
      },
    ];

    data = data.map(user => {
      const {status, ...userData} = user;
      return {
        ...userData,
        status: {state: status},
      };
    });
    return data;
  },
};
