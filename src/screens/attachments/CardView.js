// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@theme/ThemeProvider';
import {cardViewStyle} from '@styles/screens/attachments';
import {Icon, AttachmentCard} from '@components';

export default function CardView({data, filter}) {
  const {theme} = useTheme();
  const styles = cardViewStyle(theme);
  const numColumns = 3;
  const CardsData = [{id: 'static', static: true}, ...data];
  const navigation = useNavigation();

  const AddBtn = ({style}) => {
    return (
      <TouchableOpacity
        style={[styles.addOrderContainer, style]}
        onPress={() => {
          navigation.navigate('attachments', {
            screen: 'add_attachment_screen',
            params: {type: filter.id},
          });
        }}>
        <Icon iconName={'add-square'} />
        <Text style={styles.addOrderText}>Add {filter.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item, index}) => {
    return item.static ? (
      <AddBtn style={{marginRight: 'auto'}} />
    ) : (
      <AttachmentCard
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
