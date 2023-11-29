import {Dimensions, StyleSheet} from 'react-native';
import {convertToPxLayout} from '../globalStyles';

const cardWidth = convertToPxLayout(539); // 539
const cardHeight = convertToPxLayout(330); // 330
const cardRadius = convertToPxLayout(50);
const fontfamily = 'Inter';

const orderScreen = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E6EAED',
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      height: convertToPxLayout(120),
      paddingLeft: convertToPxLayout(82),
      paddingRight: convertToPxLayout(81),
      // backgroundColor: 'rbga(230, 234, 237, 0.4)',
      justifyContent: 'center',
      alignItems: 'center',
    },

    showTypeContainer: {
      position: 'absolute',

      flexDirection: 'row',
      backgroundColor: '#DDE3E5',
      justifyContent: 'space-between',
      paddingRight: convertToPxLayout(10),
      paddingLeft: convertToPxLayout(20),
      paddingVertical: convertToPxLayout(14),
      borderRadius: convertToPxLayout(16),

      left: convertToPxLayout(260),
    },

    tabsContainer: {
      flexDirection: 'row',
      backgroundColor: '#DDE3E5',
      justifyContent: 'space-between',
      paddingRight: convertToPxLayout(10),
      paddingLeft: convertToPxLayout(20),
      paddingVertical: convertToPxLayout(14),
      borderRadius: convertToPxLayout(16),
    },
    tab: {
      paddingHorizontal: convertToPxLayout(20),
      paddingVertical: convertToPxLayout(14),
      borderRadius: convertToPxLayout(16),
      marginRight: convertToPxLayout(10),
    },
    tabText: {
      fontFamily: fontfamily,
      fontSize: convertToPxLayout(22),
      fontWeight: '600',
      lineHeight: convertToPxLayout(27),
      textAlign: 'left',
      color: 'rgba(60, 68, 70, 0.75)',
    },

    list: {
      paddingLeft: convertToPxLayout(82),
    },
  });
};

const ordersStyle = theme => {
  return StyleSheet.create({
    container: {},
    content: {
      // flex: 1,
      maxWidth: cardWidth,
      minWidth: cardWidth,
      maxHeight: cardHeight,
      minHeight: cardHeight,
      borderRadius: cardRadius,
      padding: convertToPxLayout(30),
      backgroundColor: theme.colors.background,
      // backgroundColor: 'yellow',
    },
    header: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    details: {
      flex: 6,
    },
    bottom: {
      flex: 2,
      flexDirection: 'row',
    },
  });
};

const bottom = theme => {
  return StyleSheet.create({
    progressContainer: {
      flex: 2,
      marginRight: convertToPxLayout(66),
      justifyContent: 'center',
    },
    progressIndicatorInfo: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    indicator: {},
    progressSpeed: {
      alignItems: 'flex-end',
    },

    progressText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      fontSize: convertToPxLayout(20),
      color: '#3C4446', // TODO:
    },
    progressTextPer: {
      fontFamily: fontfamily,
      fontWeight: '600',
      fontSize: convertToPxLayout(20),
      color: '#3C4446', // TODO:
    },
    progressSpeedText: {
      fontFamily: fontfamily,
      fontWeight: '500',
      fontSize: convertToPxLayout(12),
      color: '#3C4446', // TODO:
    },

    viewOrderAction: {
      flex: 1,
      backgroundColor: '#3C4446', //TODO:
      borderRadius: convertToPxLayout(10),
      justifyContent: 'center',
      alignItems: 'center',
    },
    actionText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      fontSize: convertToPxLayout(16),
      color: '#FFFFFF', // TODO:
    },
  });
};

const details = theme => {
  return StyleSheet.create({
    startContainer: {
      flex: 1,
    },
    startText: {
      fontFamily: fontfamily,
      fontSize: convertToPxLayout(30),
      fontWeight: '700',
      color: '#3C4446',
    },

    EndContainer: {
      flex: 1,
    },
    EndText: {
      fontFamily: fontfamily,
      fontSize: convertToPxLayout(30),
      fontWeight: '700',
      color: '#3C4446',
    },

    moreContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    PausedContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgba(60, 68, 70, 0.1)',
      paddingHorizontal: convertToPxLayout(12),
      height: convertToPxLayout(43),
      width: convertToPxLayout(116),
      borderRadius: convertToPxLayout(15),
    },
    PausedIcon: {
      width: convertToPxLayout(15),
      height: convertToPxLayout(15),
      borderRadius: convertToPxLayout(999),
      backgroundColor: '#F29B26', // temp
      marginRight: convertToPxLayout(10),
    },
    PausedText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      textAlign: 'left',
      fontSize: convertToPxLayout(15),
    },
    WorkingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgba(60, 68, 70, 0.1)',
      paddingHorizontal: convertToPxLayout(12),
      height: convertToPxLayout(43),
      width: convertToPxLayout(116),
      borderRadius: convertToPxLayout(15),
      marginHorizontal: convertToPxLayout(5),
    },
    WorkingIcon: {
      width: convertToPxLayout(15),
      height: convertToPxLayout(15),
      borderRadius: convertToPxLayout(999),
      backgroundColor: '#F29B26', // temp
      marginRight: convertToPxLayout(10),
    },
    WorkingText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      textAlign: 'left',
      fontSize: convertToPxLayout(15),
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgba(60, 68, 70, 0.1)',
      paddingHorizontal: convertToPxLayout(12),
      // paddingLeft: 0,
      height: convertToPxLayout(43),
      width: convertToPxLayout(116),
      borderRadius: convertToPxLayout(15),
    },
    infoIcon: {
      width: convertToPxLayout(15),
      height: convertToPxLayout(15),
      borderRadius: convertToPxLayout(999),
      backgroundColor: '#F29B26', // temp
      marginRight: convertToPxLayout(10),
    },
    infoText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      textAlign: 'left',
      fontSize: convertToPxLayout(15),
    },
  });
};

const header = (theme, status) => {
  let bgColor = 'rgba(25, 135, 84, 0.2)'; //
  let contentColor = '#198754';
  switch (status) {
    case 'Finished':
      bgColor = 'rgba(25, 135, 84, 0.2)';
      contentColor = 'rgba(25, 135, 84, 1)';
      break;
    case 'In Progress':
      bgColor = 'rgba(0, 123, 255, 0.2)';
      contentColor = 'rgba(0, 123, 255, 1)';
      break;
    case 'Pending':
      bgColor = 'rgba(242, 155, 38, 0.2)';
      contentColor = 'rgba(242, 155, 38, 1)';
      break;
  }
  return StyleSheet.create({
    orderNumContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: convertToPxLayout(6),
    },
    orderNumText: {
      width: '100%',
      fontFamily: fontfamily,
      fontWeight: '700',
      textAlign: 'left',
      fontSize: convertToPxLayout(25),
      color: '#3C4446',
    },
    statusContainer: {
      height: convertToPxLayout(43),
      flexDirection: 'row',
      alignSelf: 'center',
      backgroundColor: bgColor, // green
      alignItems: 'center',
      paddingHorizontal: convertToPxLayout(12),
      borderRadius: convertToPxLayout(15),
    },
    status: {
      marginLeft: convertToPxLayout(12),
    },
    statusText: {
      fontFamily: fontfamily,
      fontSize: convertToPxLayout(16),
      fontWeight: '700',
      lineHeight: convertToPxLayout(19.36),
      textAlign: 'left',
      color: contentColor,
      // temp
    },
    statusIcon: {
      width: convertToPxLayout(15),
      height: convertToPxLayout(15),
      borderRadius: convertToPxLayout(999),
      backgroundColor: contentColor,
      // temp
    },
  });
};

export {
  bottom as ordersBottom,
  header as ordersHeader,
  details as ordersDetails,
  ordersStyle,
  orderScreen,
};
