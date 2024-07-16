// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {machineDetailsFormStyle} from '@styles/screens/addNewProfile';
import {Input, DatePicker, DropDown} from '@components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const initialFormState = {
  machine_name: '',
  machine_number: '',
  model_number: '',
};

export default function MachineDetailsForm() {
  const {theme} = useTheme();
  const styles = machineDetailsFormStyle(theme);

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Machine Details</Text>
      <KeyboardAwareScrollView
        extraHeight={120}
        enableOnAndroid={true}>
        <View style={styles.formRowContainer}>
          <Input
            value={formData.first_name}
            onChange={text => handleChange('first_name', text)}
            title={'First Name'}
            style={styles.textInputContainer}
          />
          <Input
            value={formData.email}
            onChange={text => handleChange('email', text)}
            title={'Email'}
            style={styles.textInputContainer}
          />
          <DatePicker
            value={formData.birth_date}
            onChange={text => handleChange('birth_date', text)}
            title={'Birth Date'}
            style={styles.textInputContainer}
          />
        </View>

        <View style={styles.formRowContainer}>
          <Input
            value={formData.last_name}
            onChange={text => handleChange('last_name', text)}
            title={'Last Name'}
            style={styles.textInputContainer}
          />

          <Input
            value={formData.username}
            onChange={text => handleChange('username', text)}
            title={'User Name'}
            style={styles.textInputContainer}
          />

          <Input
            value={formData.ssn}
            onChange={text => handleChange('ssn', text)}
            title={'S/N'}
            style={styles.textInputContainer}
          />
        </View>

        <View style={styles.formRowContainer}>
          <Input
            value={formData.phone_number}
            onChange={text => handleChange('phone_number', text)}
            title={'Phone Number'}
            style={styles.textInputContainer}
          />
          <Input
            value={formData.password}
            onChange={text => handleChange('password', text)}
            title={'Password'}
            style={styles.textInputContainer}
          />

          <DropDown
            placeHolder={'Select Privilege'}
            options={privilege}
            value={formData.privilege}
            onChange={text => handleChange('privilege', text)}
            title={'Privilege'}
            style={styles.textInputContainer}
          />
        </View>
      </KeyboardAwareScrollView>

    </View>
  );
}
