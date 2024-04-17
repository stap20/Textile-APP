import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import attachmentCardStyle from '@styles/components/attachmentCardStyle';
import Icon from './Icon';

export default function AttachmentCard(props) {
  const {theme} = useTheme();
  const styles = attachmentCardStyle(theme);

  const {type = '1', diameter = 5, style} = props;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        <Icon iconName={'attachment-setting'} />
      </View>

      <View style={styles.dataContainer}>
        <View style={styles.dataRowContainer}>
          <Text style={styles.title}>LFA Type: </Text>
          <Text style={styles.data}>{type}</Text>
        </View>

        <View style={styles.dataRowContainer}>
          <Text style={styles.title}>Diameter: </Text>
          <Text style={styles.data}>{diameter}</Text>
        </View>
      </View>
    </View>
  );
}
