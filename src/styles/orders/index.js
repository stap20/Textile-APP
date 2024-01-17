import {Dimensions, StyleSheet} from 'react-native';
import {convertPxToDp} from '../globalStyles';

const cardWidth = convertPxToDp(539); // 539
const cardHeight = convertPxToDp(330); // 330
const cardRadius = convertPxToDp(50);
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
      height: convertPxToDp(120),
      paddingLeft: convertPxToDp(82),
      paddingRight: convertPxToDp(81),
      // backgroundColor: 'rbga(230, 234, 237, 0.4)',
      justifyContent: 'center',
      alignItems: 'center',
    },

    showTypeContainer: {
      position: 'absolute',

      flexDirection: 'row',
      backgroundColor: '#DDE3E5',
      justifyContent: 'space-between',
      paddingRight: convertPxToDp(10),
      paddingLeft: convertPxToDp(20),
      paddingVertical: convertPxToDp(14),
      borderRadius: convertPxToDp(16),

      left: convertPxToDp(260),
    },

    tabsContainer: {
      flexDirection: 'row',
      backgroundColor: '#DDE3E5',
      justifyContent: 'space-between',
      paddingRight: convertPxToDp(10),
      paddingLeft: convertPxToDp(20),
      paddingVertical: convertPxToDp(14),
      borderRadius: convertPxToDp(16),
    },
    tab: {
      paddingHorizontal: convertPxToDp(20),
      paddingVertical: convertPxToDp(14),
      borderRadius: convertPxToDp(16),
      marginRight: convertPxToDp(10),
    },
    tabText: {
      fontFamily: fontfamily,
      fontSize: convertPxToDp(22),
      fontWeight: '600',
      lineHeight: convertPxToDp(27),
      textAlign: 'left',
      color: 'rgba(60, 68, 70, 0.75)',
    },
  });
};

/* #region List Style */
const ordersList = (theme, status) => {
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

/* #region Card Style */
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
      backgroundColor: theme.backgroundColors.card_container,
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

    viewOrderAction: {
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
    startContainer: {
      flex: 1,
    },
    startText: {
      fontFamily: fontfamily,
      fontSize: convertPxToDp(30),
      fontWeight: '700',
      color: '#3C4446',
    },

    EndContainer: {
      flex: 1,
    },
    EndText: {
      fontFamily: fontfamily,
      fontSize: convertPxToDp(30),
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
      // paddingLeft: 0,
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
      flexDirection: 'row',
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

export {
  bottom as ordersBottom,
  header as ordersHeader,
  details as ordersDetails,
  ordersStyle,
  orderScreen,
  ordersList,
};
