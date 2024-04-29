// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {formViewStyle} from '@styles/screens/addNewOrder';
import {Input, DatePicker, DropDown, MultiChoice} from '@components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const initialFormState = {
  start_date: null,
  end_date: null,
  target_rolls: '',
  working_machines: null,
  target_weight: '',
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
      <Text style={styles.title}>Order Details</Text>
      <KeyboardAwareScrollView extraHeight={120} enableOnAndroid={true}>
        <View style={styles.formRowContainer}>
          <DatePicker
            value={formData.start_date}
            onChange={text => handleChange('start_date', text)}
            title={'Start Date'}
            style={styles.textInputContainer}
          />

          <DatePicker
            value={formData.end_date}
            onChange={text => handleChange('end_date', text)}
            title={'End Date'}
            style={styles.textInputContainer}
          />
        </View>

        <View style={styles.formRowContainer}>
          <Input
            value={formData.target_rolls}
            onChange={text => handleChange('target_rolls', text)}
            title={'Target Rolls'}
            style={styles.textInputContainer}
            isNumeric={true}
          />

          {/* <DropDown
            placeHolder={'Choose Machines'} // when there is empty array
            options={privilege} // array
            value={formData.working_machines} // current array
            onChange={text => handleChange('working_machines', text)} // myfunc(fieldName, Value)
            title={'Working Machines'} // title
            style={styles.textInputContainer} // overall style
          /> */}

          <MultiChoice
            placeHolder={'Choose Machines'} // when there is empty array
            onChange={text => handleChange('working_machines', text)} // myfunc(fieldName, Value)
            title={'testtts'} // title
            style={styles.textInputContainer} // overall style
          />
        </View>

        <View style={styles.formRowContainer}>
          <Input
            value={formData.target_weight}
            onChange={text => handleChange('target_weight', text)}
            title={'Target Weight'}
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
          <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
            <Text style={styles.saveBtnTxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
