import {StyleSheet, Platform} from 'react-native';
import {convertPxToDp} from '@utils';
import Typography from '@styles/typography';

export default dashboardViewStyle = theme => {
  return StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        // gap: convertPxToDp(20)
    },

    cardContainer:{
        width: convertPxToDp(559),
        // height: convertPxToDp(500),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'  ,
        marginRight: convertPxToDp(30),
        borderRadius: convertPxToDp(50)
    },
    card2Container:{
        marginTop: convertPxToDp(20),
        // marginLeft: convertPxToDp(10),
        width: convertPxToDp(1149),
        height: convertPxToDp(514),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'  ,
        marginRight: convertPxToDp(30),
        borderRadius: convertPxToDp(50)
    }
  });
};
