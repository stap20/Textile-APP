import HomeScreen from '@screens/HomeScreen';
import OrderNavigation from './OrderNavigation';
import MachinesScreen from '@screens/machines'

export default [
  {
    name: 'dashboard',
    component: HomeScreen,
    options: {
      active_icon: 'dashboard',
      icon: 'dashboard-outline',
      tabName: 'Dashboard',
    },
  },
  {
    name: 'add_machine',
    component: MachinesScreen,
    options: {
      active_icon: 'add-square',
      icon: 'add-square-outline',
      tabName: 'Add Machine',
    },
  },
  {
    name: 'machines',
    component: MachinesScreen,
    options: {
      active_icon: 'machine',
      icon: 'machine-outline',
      tabName: 'Machines',
    },
  },
  {
    name: 'create_order',
    component: MachinesScreen,
    options: {
      active_icon: 'additem',
      icon: 'additem-outline',
      tabName: 'Create New Order',
    },
  },
  {
    name: 'orders',
    component: OrderNavigation,
    options: {
      active_icon: 'document',
      icon: 'document-outline',
      tabName: 'Orders',
    },
  },
  {
    name: 'create_profile',
    component: MachinesScreen,
    options: {
      active_icon: 'folder-add',
      icon: 'folder-add-outline',
      tabName: 'Create New Profile',
    },
  },
  {
    name: 'attachments',
    component: MachinesScreen,
    options: {
      active_icon: 'attach',
      icon: 'attach-outline',
      tabName: 'Attachments',
    },
  },
  {
    name: 'users',
    component: MachinesScreen,
    options: {
      active_icon: 'users',
      icon: 'users-outline',
      tabName: 'Users',
    },
  },
];
