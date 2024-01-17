import {StyleSheet} from 'react-native';
import {convertPxToDp} from '../globalStyles';

const cardWidth = convertPxToDp(539); // 539
const cardHeight = convertPxToDp(330); // 330
const cardRadius = convertPxToDp(50);
const fontfamily = 'Inter';

/* #region Card Style */
const machinesStyle = theme => {
  return StyleSheet.create({
    container: {},
    content: {
      width: cardWidth,
      height: cardHeight,
      borderRadius: cardRadius,
      padding: convertPxToDp(30),
      backgroundColor: theme.backgroundColors.card_container,
    },
    header: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: convertPxToDp(20),
    },
    details: {
      flex: 6,
      justifyContent: 'space-around',
      // alignItems: 'flex-start',
    },
    bottom: {
      flex: 2,
      flexDirection: 'row',
      marginTop: convertPxToDp(23),
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
    },
    orderText: {
      fontFamily: fontfamily,
      fontSize: convertPxToDp(30),
      fontWeight: '700',
      color: '#3C4446',
      lineHeight: convertPxToDp(30),
    },

    speedRateContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: convertPxToDp(20),
    },
    speedRateText: {
      fontFamily: fontfamily,
      fontSize: convertPxToDp(30),
      fontWeight: '700',
      color: '#3C4446',
      lineHeight: convertPxToDp(30),
    },

    numText: {
      fontFamily: fontfamily,
      fontSize: convertPxToDp(18),
      fontWeight: '500',
      color: '#3C4446',
    },
    colonText: {
      fontFamily: fontfamily,
      fontSize: convertPxToDp(25),
      fontWeight: '700',
      color: '#3C4446',
    },

    moreContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: convertPxToDp(30),
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
  let bgColor;
  let contentColor;
  switch (status) {
    case 'Working':
      bgColor = 'rgba(25, 135, 84, 0.2)';
      contentColor = 'rgba(25, 135, 84, 1)';
      break;
    case 'Stopped':
      bgColor = 'rgba(220, 53, 69, 0.2)';
      contentColor = 'rgba(220, 53, 69, 1)';
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
/* #endregion */

/* #region List Style */
const machinesList = (theme, status) => {
  let bgColor;
  let contentColor;
  switch (status) {
    case 'Finished':
      console.log('1');
      bgColor = 'rgba(25, 135, 84, 0.2)';
      contentColor = 'rgba(25, 135, 84, 1)';
      break;
    case 'In Progress':
      console.log('2');
      bgColor = 'rgba(0, 123, 255, 0.2)';
      contentColor = 'rgba(0, 123, 255, 1)';
      break;
    case 'Pending':
      console.log('3');
      bgColor = 'rgba(242, 155, 38, 0.2)';
      contentColor = 'rgba(242, 155, 38, 1)';
      break;
  }
  return StyleSheet.create({
    container: {
      // flex: 1,
      // marginTop: convertPxToDp(34),
      marginHorizontal: convertPxToDp(82),
    },
    addOrderContainer: {
      width: '100%',
    },
    tableContainer: {
      backgroundColor: 'yellow',
      width: '100%',
      height: 'auto',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: convertPxToDp(16),
      // marginBottom: convertPxToDp(2),
      marginTop: convertPxToDp(40),
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',

      paddingVertical: convertPxToDp(22),
    },
    headerText: {
      flex: 1,
      fontFamily: 'Inter',
      fontSize: convertPxToDp(16),
      fontWeight: '700',
      lineHeight: convertPxToDp(19),
      textAlign: 'center',
    },

    detailsContainer: {
      alignItems: 'center',
    },
    rowContainer: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      paddingTop: convertPxToDp(15),
      paddingBottom: convertPxToDp(12),
    },
    rowText: {
      flex: 1,
      fontFamily: 'Inter',
      fontSize: convertPxToDp(14),
      fontWeight: '500',
      lineHeight: convertPxToDp(20),
      textAlign: 'center',
    },
    rowView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    statusContainer: {
      height: convertPxToDp(37),
      width: convertPxToDp(125),
      flexDirection: 'row',
      backgroundColor: bgColor, // green
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingLeft: convertPxToDp(12),
      // paddingRight: convertPxToDp(33),
      paddingVertical: convertPxToDp(10),
      borderRadius: convertPxToDp(15),
    },
    status: {
      marginLeft: convertPxToDp(12),
    },
    statusText: {
      fontFamily: 'Inter',
      fontSize: convertPxToDp(14),
      fontWeight: '500',
      lineHeight: convertPxToDp(16.94),
      // textAlign: 'left',
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

    actionIcon: {
      width: convertPxToDp(28),
      height: convertPxToDp(28),
      backgroundColor: 'orange',
    },
  });
};
/* #endregion */

export {
  bottom as machinesBottom,
  header as machinesHeader,
  details as machinesDetails,
  machinesStyle,
  machinesList,
};
