import OrderNavigation from './OrderNavigation';
import MachineNavigation from './MachineNavigation';
import AttachmentNavigation from './AttachmentNavigation'
import UserNavigation from './UserNavigation'
import AddNewOrderScreen from '@screens/addNewOrder';
import ProfileNavigation from './ProfileNavigation'
import DashboardScreen from '@screens/dashboard'
import AddNewMachineScreen from '@screens/addNewMachine'

export default [
  {
    name: 'dashboard',
    component: DashboardScreen,
    options: {
      active_icon: 'dashboard',
      icon: 'dashboard-outline',
      tabName: 'Dashboard',
    },
  },
  {
    name: 'add_machine',
    component: AddNewMachineScreen,
    options: {
      active_icon: 'add-square',
      icon: 'add-square-outline',
      tabName: 'Add Machine',
    },
  },
  {
    name: 'machines',
    component: MachineNavigation,
    options: {
      active_icon: 'machine',
      icon: 'machine-outline',
      tabName: 'Machines',
    },
  },
  {
    name: 'create_order',
    component: AddNewOrderScreen,
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
    name: 'profiles',
    component: ProfileNavigation,
    options: {
      active_icon: 'folder-add',
      icon: 'folder-add-outline',
      tabName: 'Profiles',
    },
  },
  {
    name: 'attachments',
    component: AttachmentNavigation,
    options: {
      active_icon: 'attach',
      icon: 'attach-outline',
      tabName: 'Attachments',
    },
  },
  {
    name: 'users',
    component: UserNavigation,
    options: {
      active_icon: 'users',
      icon: 'users-outline',
      tabName: 'Users',
    },
  },
];
