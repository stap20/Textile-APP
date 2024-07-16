import react, {useState} from 'react';

import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import Modal from 'react-native-modal';
import {useTheme} from '@theme/ThemeProvider';
import popUpModalStyle from '@styles/components/popUpModalStyle';
import convertPxToDp from './../utils/ConvertPxToDp';
import Icon from './Icon';

export default function PopUpModal(props) {
  const {status, onCancel, onDelete} = props;
  const {theme} = useTheme();
  const styles = popUpModalStyle(theme);

  return (
    <Modal
      isVisible={status}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      backdropColor={'#4b4b4a'}
      backdropOpacity={0.9}>
        <StatusBar hidden={status} />
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon iconName={'modal-warning'} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.titleText}>{`Sure you want to delete?`}</Text>
          <Text
            style={
              styles.subTitleText
            }>{`Are you sure you want to delete this?`}</Text>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity
            onPress={() => onCancel()}
            style={styles.canceBtnContainer}>
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onDelete()}
            style={styles.deleteBtnContainer}>
            <Icon iconName={'trash-modal'} />

            <Text style={styles.deleteBtnText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
