// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {formViewStyle} from '@styles/screens/addNewAttachment';
import {Input} from '@components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function FeederForm({onSave, onCancel}) {
  const {theme} = useTheme();
  const styles = formViewStyle(theme);

  const [feederType, setFeederType] = useState('');
  const [diameter, setDiameter] = useState('');

  const handleDiameterValidation = diameter => {
    const numericValue = diameter.replace(/[^0-9.]/g, '');
    setDiameter(numericValue);
  };

  const handleSave = () => {
    onSave({type: feederType, diameter: diameter});
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feeder Details</Text>
      <KeyboardAwareScrollView extraHeight={120} enableOnAndroid={true}>
        <Input
          value={feederType}
          onChange={setFeederType}
          title={'Feeder Type'}
          style={styles.textInputContainer}
        />

        <Input
          value={diameter}
          onChange={handleDiameterValidation}
          title={'Diameter'}
          isNumeric={true}
          style={styles.textInputContainer}
        />
      </KeyboardAwareScrollView>
      <View style={styles.btnsContainer}>
        <View style={styles.btnsWrapper}>
          <TouchableOpacity onPress={handleCancel} style={styles.cancelBtn}>
            <Text style={styles.cancelBtnTxt}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
            <Text style={styles.saveBtnTxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
