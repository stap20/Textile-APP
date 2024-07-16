import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {stepIndicatorStyle} from '@styles/screens/addNewProfile';
import {ProgressBar, Icon} from '@components';

export default function StepIndicator({currentStep, numberOfSteps}) {
  const {theme} = useTheme();
  const styles = stepIndicatorStyle(theme);

  return (
    <View style={styles.container}>
      {Array.from({length: numberOfSteps}, (_, index) => {
        const isActive = index <= currentStep - 1;
        const isFirst = index === 0;
        const isLast = index + 1 === numberOfSteps;
        const percentage =
          index < currentStep - 1 ? 100 : index === currentStep - 1 ? 50 : 0;

        return (
          <React.Fragment key={index}>
            <View
              style={[
                styles.stepCircle,
                isActive && styles.activeStepCircle,
                isFirst && styles.firstStepCircle,
                isLast && styles.lastStepCircle,
              ]}>
              {index < currentStep - 1 ? (
                <Icon iconName={'stepper-check'} />
              ) : (
                <Text
                  style={[styles.stepText, isActive && styles.activeStepText]}>
                  {index + 1}
                </Text>
              )}
            </View>

            {index < numberOfSteps - 1 && (
              <ProgressBar progress={percentage} style={styles.stepLine} />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
}
