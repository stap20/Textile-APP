// LayoutManager.js
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {stepTwoPageStyle} from '@styles/screens/addNewProfile';
import {CounterInput, DropDown, Icon} from '@components';
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
            <View style={styles.crudFeederWrapper}>
              <Text style={styles.crudText}>{row.feeder.name}</Text>
            </View>
            <View style={styles.crudYarnCounterWrapper}>
              <Text style={styles.crudText}>{row.yarn_count}</Text>
            </View>
            <View style={styles.crudNumberFeederWrapper}>
              <Text style={styles.crudText}>{row.number_of_feeder}</Text>
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

export default function StepTwo({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) {
  const {theme} = useTheme();
  const styles = stepTwoPageStyle(theme);
  const [feederType, setFeederType] = useState(null);
  const [yarnCount, setYarnCount] = useState(1);
  const [numberOfFeeder, setNumberOfFeeder] = useState(1);
  const [localFeederList, setLocalFeederList] = useState(formData.feederList);
  const [feederTypes, setFeederTypes] = useState([]);

  const handleChange = (name, value) => {
    updateFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    handleChange('feederList', localFeederList);
    nextStep();
  };

  const addRow = () => {
    if (feederType !== null) {
      var feederList = localFeederList;
      feederList.push({
        feeder: feederType,
        yarn_count: yarnCount,
        number_of_feeder: numberOfFeeder,
      });

      setLocalFeederList(feederList);

      setFeederType(null);
      setYarnCount(1);
      setNumberOfFeeder(1);
    }
  };

  const deleteRow = idx => {
    const filteredList = localFeederList.filter((element, index) => {
      return index !== idx; // Filter even indices
    });

    setLocalFeederList(filteredList);
  };

  useEffect(() => {
    AttachmentsHandler.Feeder.getAll().then(res => {
      const list = res.map(item => ({name: item.type, id: item.id}));
      setFeederTypes(list);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feeder</Text>
      <View style={styles.formRowContainer}>
        <DropDown
          placeHolder={'Select Feeder'}
          options={feederTypes}
          value={feederType}
          onChange={setFeederType}
          title={'Feeder Type'}
          style={styles.feederDropDownContainer}
        />
        <CounterInput
          value={yarnCount}
          onChange={setYarnCount}
          title={'Yarn Count'}
          style={styles.yarnCountContainer}
          max={99}
          min={1}
        />
        <CounterInput
          value={numberOfFeeder}
          onChange={setNumberOfFeeder}
          title={'Num Of Feeder'}
          style={styles.numberOfFeederContainer}
          max={99}
          min={1}
        />

        <TouchableOpacity onPress={addRow} style={styles.addCrudBtn}>
          <Text style={styles.addCrudBtnTxt}>Add</Text>
        </TouchableOpacity>
      </View>

      {localFeederList.length > 0 && (
        <FeederCrud
          list={localFeederList}
          styles={styles}
          deleteRow={deleteRow}
        />
      )}

      <View style={styles.btnsContainer}>
        <View style={styles.btnsWrapper}>
          <TouchableOpacity onPress={prevStep} style={styles.cancelBtn}>
            <Text style={styles.cancelBtnTxt}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSubmit} style={styles.saveBtn}>
            <Text style={styles.saveBtnTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
