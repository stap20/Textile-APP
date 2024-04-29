// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {formViewStyle} from '@styles/screens/addNewUser';
import {Input, DatePicker, DropDown} from '@components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const initialFormState = {
  first_name: '',
  last_name: '',
  username: '',
  phone_number: '',
  email: '',
  birth_date: null,
  ssn: '',
  privilege: null,
  password: '',
};

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

  const privilege = [
    {name: 'User', id: 'user'},
    {name: 'Admin', id: 'admin'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details</Text>
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
