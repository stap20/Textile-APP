import {Dimensions, StyleSheet} from 'react-native';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

const Wper = 0.2695;
const Hper = 0.275;
const t = null;

const cardWidth = wWidth * Wper * t || 539; // 539
const cardHeight = wHeight * Hper * t || 330; // 330
const cardRadius = 50;
const fontfamily = 'Roboto';

const cardStatus = true;

const ordersStyle = theme => {
  return StyleSheet.create({
    container: {},
    content: {
      flex: 1,
      maxWidth: cardWidth,
      minWidth: cardWidth,
      maxHeight: cardHeight,
      minHeight: cardHeight,
      borderRadius: cardRadius,
      padding: 30,
      backgroundColor: theme.colors.background,
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
      marginRight: 66,
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
      fontSize: 20,
      color: '#3C4446', // TODO:
    },
    progressTextPer: {
      fontFamily: fontfamily,
      fontWeight: '600',
      fontSize: 20,
      color: '#3C4446', // TODO:
    },
    progressSpeedText: {
      fontFamily: fontfamily,
      fontWeight: '500',
      fontSize: 12,
      color: '#3C4446', // TODO:
    },

    viewOrderAction: {
      flex: 1,
      backgroundColor: '#3C4446', //TODO:
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    actionText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      fontSize: 16,
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
      fontSize: 30,
      fontWeight: '700',
      color: '#3C4446',
    },

    EndContainer: {
      flex: 1,
    },
    EndText: {
      fontFamily: fontfamily,
      fontSize: 30,
      fontWeight: '700',
      color: 'rgba(60, 68, 70, 1)',
    },

    moreContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      // backgroundColor: "#ffffff",
    },
    PausedContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgba(60, 68, 70, 0.1)',
      paddingHorizontal: 12,
      height: 43,
      width: 116,
      borderRadius: 15,
    },
    PausedIcon: {
      width: 15,
      height: 15,
      borderRadius: 999,
      backgroundColor: '#F29B26', // temp
      marginRight: 10,
    },
    PausedText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      textAlign: 'left',
      fontSize: 15,
    },
    WorkingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgba(60, 68, 70, 0.1)',
      paddingHorizontal: 12,
      height: 43,
      width: 116,
      borderRadius: 15,
      marginHorizontal: 5,
    },
    WorkingIcon: {
      width: 15,
      height: 15,
      borderRadius: 999,
      backgroundColor: '#F29B26', // temp
      marginRight: 10,
    },
    WorkingText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      textAlign: 'left',
      fontSize: 15,
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'rgba(60, 68, 70, 0.1)',
      paddingHorizontal: 12,
      // paddingLeft: 0,
      height: 43,
      width: 116,
      borderRadius: 15,
    },
    infoIcon: {
      width: 15,
      height: 15,
      borderRadius: 999,
      backgroundColor: '#F29B26', // temp
      marginRight: 10,
    },
    infoText: {
      fontFamily: fontfamily,
      fontWeight: '600',
      textAlign: 'left',
      fontSize: 15,
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
      paddingHorizontal: 6,
    },
    orderNumText: {
      width: '100%',
      fontFamily: fontfamily,
      fontWeight: '700',
      textAlign: 'left',
      fontSize: 30,
    },
    statusContainer: {
      height: 43,
      flexDirection: 'row-reverse',
      alignSelf: 'center',
      backgroundColor: bgColor, // green
      alignItems: 'center',
      paddingHorizontal: 12,
      borderRadius: 15,
    },
    status: {
      marginLeft: 12,
    },
    statusText: {
      fontFamily: fontfamily,
      fontSize: 16,
      fontWeight: '700',
      lineHeight: 19.36,
      textAlign: 'left',
      color: contentColor,
      // temp
    },
    statusIcon: {
      width: 15,
      height: 15,
      borderRadius: 999,
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
