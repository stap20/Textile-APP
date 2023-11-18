import {Dimensions, StyleSheet} from 'react-native';
import {convertToPxLayout} from '../globalStyles';

const cardWidth = convertToPxLayout(539); // 539
const cardHeight = convertToPxLayout(330); // 330
const cardRadius = convertToPxLayout(50);
const fontfamily = 'Inter';

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

    viewProfileAction: {
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
    orderContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: convertToPxLayout(63),
    },
    orderText: {
      fontFamily: fontfamily,
      fontSize: convertToPxLayout(30),
      fontWeight: '700',
      color: '#3C4446',
    },

    speedRateContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // paddingRight: convertToPxLayout(30),
    },
    speedRateText: {
      fontFamily: fontfamily,
      fontSize: convertToPxLayout(30),
      fontWeight: '700',
      color: '#3C4446',
    },

    numText: {
      fontFamily: fontfamily,
      fontSize: convertToPxLayout(18),
      fontWeight: '500',
      color: '#3C4446',
    },

    moreContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
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

    qualityContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgba(60, 68, 70, 0.1)',
      paddingHorizontal: convertToPxLayout(12),
      height: convertToPxLayout(43),
      width: convertToPxLayout(116),
      borderRadius: convertToPxLayout(15),
    },
    qualityIcon: {
      width: convertToPxLayout(15),
      height: convertToPxLayout(15),
      borderRadius: convertToPxLayout(999),
      backgroundColor: '#F29B26', // temp
      marginRight: convertToPxLayout(10),
    },
    qualityText: {
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
    case 'FINISHED':
      bgColor = 'rgba(25, 135, 84, 0.2)';
      contentColor = 'rgba(25, 135, 84, 1)';
      break;
    case 'IN_PROGRESS':
      bgColor = 'rgba(0, 123, 255, 0.2)';
      contentColor = 'rgba(0, 123, 255, 1)';
      break;
    case 'PENDING':
      bgColor = 'rgba(242, 155, 38, 0.2)';
      contentColor = 'rgba(242, 155, 38, 1)';
      break;

    default:
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
      flexDirection: 'row-reverse',
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
};
