// LayoutManager.js
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {stepThreePageStyle} from '@styles/screens/addNewProfile';
import {DropDown, Icon} from '@components';
import {AttachmentsHandler} from '@services/restApi';

function FeederCrud({list, styles, deleteRow}) {
  const Viwer = list.length > 4 ? ScrollView : View;

  return (
    <Viwer style={styles.formCrudContainer}>
      {list.map((row, idx) => {
        const isLastRow = idx + 1 === list.length;
        return (
          <View
            style={[
              styles.crudRowContainer,
              isLastRow && {borderBottomWidth: 0},
            ]}
            key={idx}>
            <View style={styles.crudLfaWrapper}>
              <Text style={styles.crudText}>{row.name}</Text>
            </View>
            <View style={styles.crudDiameterWrapper}>
              <Text style={styles.crudText}>{row.diameter}</Text>
            </View>
            <TouchableOpacity
              style={styles.crudDeleteBtn}
              onPress={() => {
                deleteRow(idx);
              }}>
              <Icon iconName={'trash-form-crud'} />
            </TouchableOpacity>
          </View>
        );
      })}
    </Viwer>
  );
}

export default function StepThree({
  formData,
  updateFormData,
  onSubmit,
  prevStep,
}) {
  const {theme} = useTheme();
  const styles = stepThreePageStyle(theme);
  const [lfaType, setLfaType] = useState(null);
  const [localLfaList, setLocalLfaList] = useState(formData.lfaList);
  const [lfaTypes, setLfaTypes] = useState([]);

  const handleChange = (name, value) => {
    updateFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    handleChange('lfaList', localLfaList);
    onSubmit();
  };

  const addRow = () => {
    if (lfaType !== null) {
      var lfaList = localLfaList;
      lfaList.push(lfaType);

      setLocalLfaList(lfaList);
      setLfaType(null);
    }
  };

  const deleteRow = idx => {
    const filteredList = localLfaList.filter((element, index) => {
      return index !== idx; // Filter even indices
    });

    setLocalLfaList(filteredList);
  };

  useEffect(() => {
    AttachmentsHandler.Lfa.getAll().then(res => {
      const list = res.map(item => ({
        name: item.type,
        id: item.id,
        diameter: item.diameter,
      }));
      setLfaTypes(list);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LFA</Text>
      <View style={styles.formRowContainer}>
        <DropDown
          placeHolder={'Select LFA'}
          options={lfaTypes}
          value={lfaType}
          onChange={setLfaType}
          title={'LFA Type'}
          style={styles.lfaDropDownContainer}
        />
        {lfaType && (
          <View style={styles.diameterContianer}>
            <Text style={styles.diameterTitle}>Diameter</Text>
            <View style={styles.diameterWrapper}>
              <Text style={styles.diameterText}>{lfaType.diameter}</Text>
            </View>
          </View>
        )}

        <TouchableOpacity onPress={addRow} style={styles.addCrudBtn}>
          <Text style={styles.addCrudBtnTxt}>Add</Text>
        </TouchableOpacity>
      </View>

      {localLfaList.length > 0 && (
        <FeederCrud list={localLfaList} styles={styles} deleteRow={deleteRow} />
      )}

      <View style={styles.btnsContainer}>
        <View style={styles.btnsWrapper}>
          <TouchableOpacity onPress={prevStep} style={styles.cancelBtn}>
            <Text style={styles.cancelBtnTxt}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSubmit} style={styles.saveBtn}>
            <Text style={styles.saveBtnTxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
