// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {formViewStyle} from '@styles/screens/addNewMachine';
import {Input, DropDown} from '@components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const initialFormState = {};

export default function FormView({onSave, onCancel}) {
  const {theme} = useTheme();
  const styles = formViewStyle(theme);

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSave = () => {
    onSave(formData);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <View style={styles.container}>

        <View style={styles.machineContainer}>
          <View style={styles.profileContainer}>
            <DropDown
                placeHolder={'Select LFA'}
                options={[]}
                value={[]}
                onChange={() => {}}
                title={'Select Profile'}
                style={styles.profileDropDownContainer}
              />
          </View>
          <View style={styles.formViewContainer}>
            <Text style={styles.title}>title</Text>
            <KeyboardAwareScrollView extraHeight={120} enableOnAndroid={true}>
              <Input
                value={formData.name}
                onChange={text => handleChange('name', text)}
                title={'Machine Name'}
                style={styles.textInputContainer}
              />
              <Input
                value={formData.name}
                onChange={text => handleChange('number', text)}
                title={'Machine Number'}
                style={styles.textInputContainer}
                isNumeric={true}
              />
              <Input
                value={formData.name}
                onChange={text => handleChange('model', text)}
                title={'Model Number'}
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
        </View>
        <View style={[styles.formViewContainer, {backgroundColor: 'red'}]}>
          {/* <Text>ttetsts</Text> */}
        </View>
    </View>
  );
}
