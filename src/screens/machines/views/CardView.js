// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@theme/ThemeProvider';
import {cardViewStyle} from '@styles/screens/orders';
import {Icon, MachineCard} from '@components';
import {ToastCaller} from '../../../utils';

export default function CardView({data}) {
  const {theme} = useTheme();
  const styles = cardViewStyle(theme);
  const numColumns = 3;
  const CardsData = [{id: 'static', static: true}, ...data];

  const AddBtn = ({style}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          ToastCaller({
            type: 'info',
            text1: 'abdo el ray2',
          });
        }}
        style={[styles.addOrderContainer, style]}>
        <Icon iconName={'add-square'} />
        <Text style={styles.addOrderText}>Add Machine2</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item, index}) => {
    return item.static ? (
      <AddBtn style={{marginRight: 'auto'}} />
    ) : (
      <MachineCard
        style={
          index % numColumns !== numColumns - 1 ? {marginRight: 'auto'} : {}
        }
        {...item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CardsData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        scrollEnabled={true}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
