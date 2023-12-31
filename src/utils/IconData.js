import convertPxToDp from './ConvertPxToDp';
import {useTheme} from '@theme/ThemeProvider';

const {theme} = useTheme();

// iconData.json
const iconData = {
  dashboard: {
    type: 'svg',
    source: require('@assets/icons/dashboard.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    color: theme.colors.primary,
  },
  'dashboard-outline': {
    type: 'svg',
    source: require('@assets/icons/dashboard-outline.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    stroke: theme.colors.secondary,
  },
  'add-square': {
    type: 'svg',
    source: require('@assets/icons/add-square.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    color: theme.colors.primary,
  },
  'add-square-outline': {
    type: 'svg',
    source: require('@assets/icons/add-square-outline.js'),
    width: convertPxToDp(46),
    height: convertPxToDp(46),
    stroke: theme.colors.secondary,
  },

  // settings: {
  //   type: 'MaterialIcons',
  //   name: 'settings',
  //   size: 24,
  //   color: 'black',
  // },
  // customSvgIcon: {
  //   type: 'svg',
  //   source: require('./assets/icons/customSvgIcon.svg'),
  //   size: 30,
  //   color: 'red',
  // },
};

export default iconData;
