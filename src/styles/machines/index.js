import {Dimensions, StyleSheet} from 'react-native';
import {convertPxToDp} from '../globalStyles';

const cardWidth = convertPxToDp(539); // 539
const cardHeight = convertPxToDp(330); // 330
const cardRadius = convertPxToDp(50);
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
      padding: convertPxToDp(30),
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
      marginRight: convertPxToDp(66),
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
      fontSize: convertPxToDp(20),
      color: '#3C4446', // TODO:
    },
    progressTextPer: {
      fontFamily: fontfamily,
      fontWeight: '600',
      fontSize: convertPxToDp(20),
      color: '#3C4446', // TODO:
    },
    progressSpeedText: {
      fontFamily: fontfamily,
      fontWeight: '500',
      fontSize: convertPxToDp(12),
      color: '#3C4446', // TODO:
    },

    viewProfileAction: {
      flex: 1,
      backgroundColor: '#3C4446', //TODO:
      borderRadius: convertPxToDp(10),
      justifyContent: 'center',
      alignItems: 'center',
    },
    actionText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      fontSize: convertPxToDp(16),
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
      paddingRight: convertPxToDp(63),
    },
    orderText: {
      fontFamily: fontfamily,
      fontSize: convertPxToDp(30),
      fontWeight: '700',
      color: '#3C4446',
    },

    speedRateContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // paddingRight: convertPxToDp(30),
    },
    speedRateText: {
      fontFamily: fontfamily,
      fontSize: convertPxToDp(30),
      fontWeight: '700',
      color: '#3C4446',
    },

    numText: {
      fontFamily: fontfamily,
      fontSize: convertPxToDp(18),
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
      paddingHorizontal: convertPxToDp(12),
      height: convertPxToDp(43),
      width: convertPxToDp(116),
      borderRadius: convertPxToDp(15),
    },
    PausedIcon: {
      width: convertPxToDp(15),
      height: convertPxToDp(15),
      borderRadius: convertPxToDp(999),
      backgroundColor: '#F29B26', // temp
      marginRight: convertPxToDp(10),
    },
    PausedText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      textAlign: 'left',
      fontSize: convertPxToDp(15),
    },

    WorkingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgba(60, 68, 70, 0.1)',
      paddingHorizontal: convertPxToDp(12),
      height: convertPxToDp(43),
      width: convertPxToDp(116),
      borderRadius: convertPxToDp(15),
      marginHorizontal: convertPxToDp(5),
    },
    WorkingIcon: {
      width: convertPxToDp(15),
      height: convertPxToDp(15),
      borderRadius: convertPxToDp(999),
      backgroundColor: '#F29B26', // temp
      marginRight: convertPxToDp(10),
    },
    WorkingText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      textAlign: 'left',
      fontSize: convertPxToDp(15),
    },

    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgba(60, 68, 70, 0.1)',
      paddingHorizontal: convertPxToDp(12),
      height: convertPxToDp(43),
      width: convertPxToDp(116),
      borderRadius: convertPxToDp(15),
    },
    infoIcon: {
      width: convertPxToDp(15),
      height: convertPxToDp(15),
      borderRadius: convertPxToDp(999),
      backgroundColor: '#F29B26', // temp
      marginRight: convertPxToDp(10),
    },
    infoText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      textAlign: 'left',
      fontSize: convertPxToDp(15),
    },

    qualityContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgba(60, 68, 70, 0.1)',
      paddingHorizontal: convertPxToDp(12),
      height: convertPxToDp(43),
      width: convertPxToDp(116),
      borderRadius: convertPxToDp(15),
    },
    qualityIcon: {
      width: convertPxToDp(15),
      height: convertPxToDp(15),
      borderRadius: convertPxToDp(999),
      backgroundColor: '#F29B26', // temp
      marginRight: convertPxToDp(10),
    },
    qualityText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      textAlign: 'left',
      fontSize: convertPxToDp(15),
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
      paddingHorizontal: convertPxToDp(6),
    },
    orderNumText: {
      width: '100%',
      fontFamily: fontfamily,
      fontWeight: '700',
      textAlign: 'left',
      fontSize: convertPxToDp(25),
      color: '#3C4446',
    },
    statusContainer: {
      height: convertPxToDp(43),
      flexDirection: 'row-reverse',
      alignSelf: 'center',
      backgroundColor: bgColor, // green
      alignItems: 'center',
      paddingHorizontal: convertPxToDp(12),
      borderRadius: convertPxToDp(15),
    },
    status: {
      marginLeft: convertPxToDp(12),
    },
    statusText: {
      fontFamily: fontfamily,
      fontSize: convertPxToDp(16),
      fontWeight: '700',
      lineHeight: convertPxToDp(19.36),
      textAlign: 'left',
      color: contentColor,
      // temp
    },
    statusIcon: {
      width: convertPxToDp(15),
      height: convertPxToDp(15),
      borderRadius: convertPxToDp(999),
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
