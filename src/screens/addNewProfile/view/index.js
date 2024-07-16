import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {formViewStyle} from '@styles/screens/addNewProfile';
import StepIndicator from './StepIndicator';
import {StepOne, StepTwo, StepThree} from './pages';
import {ToastCaller} from '@utils';

const FormContainer = ({onCancel, onSave}) => {
  const {theme} = useTheme();
  const styles = formViewStyle(theme);

  const [formData, setFormData] = useState({  
    profileName: null,
    numberOfNeedles: null,
    courses: null,
    diameter: null,
    wales: null,
    machineType: null,
    feederList: [],
    lfaList: [],
  });
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = newData => {
    setFormData({...formData, ...newData});
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (
      formData.profileName === null ||
      formData.numberOfNeedles === null ||
      formData.courses === null ||
      formData.diameter === null ||
      formData.wales === null ||
      formData.machineType === null ||
      formData.feederList.length === 0 ||
      formData.lfaList.length === 0
    ) {
      ToastCaller('error', 'There are missing Data');

      return;
    }
    onSave(formData);
  };

  const handleCancel = () => {
    onCancel();
  };

  const steps = {
    1: (
      <StepOne
        formData={formData}
        updateFormData={updateFormData}
        nextStep={nextStep}
        handleCancel={handleCancel}
      />
    ),
    2: (
      <StepTwo
        formData={formData}
        updateFormData={updateFormData}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    3: (
      <StepThree
        formData={formData}
        updateFormData={updateFormData}
        prevStep={prevStep}
        onSubmit={handleSubmit}
      />
    ),
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepperContainter}>
        <StepIndicator currentStep={currentStep} numberOfSteps={3} />
      </View>

      <View style={styles.formContainer}>{steps[currentStep]}</View>
    </View>
  );
};

export default FormContainer;
