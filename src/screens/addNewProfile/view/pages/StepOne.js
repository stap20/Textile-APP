// LayoutManager.js
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {stepOnePageStyle} from '@styles/screens/addNewProfile';
import {Input, DropDown} from '@components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {MachineTypeHandler} from '@services/restApi';

export default function StepOne({
  formData,
  updateFormData,
  nextStep,
  handleCancel,
}) {
  const {theme} = useTheme();
  const styles = stepOnePageStyle(theme);
  const [machineType, setMachineType] = useState(formData.machineType);
  const [machineTypes, setMachineTypes] = useState([]);

  const handleChange = (name, value) => {
    updateFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    updateFormData({...formData, ['machineType']: machineType});
    nextStep();
  };

  useEffect(() => {
    MachineTypeHandler.getAll().then(res => {
      const list = res.map(item => ({name: item.type, id: item.id}));
      setMachineTypes(list);
    });
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView extraHeight={120} enableOnAndroid={true}>
        <Text style={styles.title}>Machine Specs</Text>

        <View style={styles.formRowContainer}>
          <Input
            value={formData.profileName}
            onChange={text => handleChange('profileName', text)}
            title={'Profile Name'}
            style={styles.textInputContainer}
          />
          <DropDown
            placeHolder={'Select Machine Type'}
            options={machineTypes}
            value={machineType}
            onChange={setMachineType}
            title={'Machine Type'}
            style={styles.textInputContainer}
          />
        </View>

        <View style={styles.formRowContainer}>
          <Input
            value={formData.diameter}
            onChange={text => handleChange('diameter', text)}
            title={'Diameter'}
            style={styles.textInputContainer}
            isNumeric={true}
          />

          <Input
            value={formData.numberOfNeedles}
            onChange={text => handleChange('numberOfNeedles', text)}
            title={'Number Of Needles'}
            style={styles.textInputContainer}
            isNumeric={true}
          />
        </View>

        <View style={styles.formRowContainer}>
          <Input
            value={formData.courses}
            onChange={text => handleChange('courses', text)}
            title={'Coursws'}
            style={styles.textInputContainer}
            isNumeric={true}
          />
          <Input
            value={formData.wales}
            onChange={text => handleChange('wales', text)}
            title={'Wales'}
            style={styles.textInputContainer}
            isNumeric={true}
          />
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.btnsContainer}>
        <View style={styles.btnsWrapper}>
          <TouchableOpacity onPress={handleCancel} style={styles.cancelBtn}>
            <Text style={styles.cancelBtnTxt}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSubmit} style={styles.saveBtn}>
            <Text style={styles.saveBtnTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
