// LayoutManager.js
import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@theme/ThemeProvider';
import {cardViewStyle} from '@styles/screens/attachments';
import {Icon, AttachmentCard, PopUpModal} from '@components';

export default function CardView({data, filter, deleteAttachment}) {
  const {theme} = useTheme();
  const styles = cardViewStyle(theme);
  const numColumns = 3;
  const CardsData = [{id: 'static', static: true}, ...data];
  const [deleteModal, triggerDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const navigation = useNavigation();

  const onCloseModal = () => {
    triggerDeleteModal(false);
  };

  const openModel = selectedId => {
    setSelectedId(selectedId);
    triggerDeleteModal(true);
  };

  const onDelete = () => {
    deleteAttachment(filter.id, selectedId).then(res => {
      if (res) {
        onCloseModal();
      }
    });
  };

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
        filterName={filter.title}
        onLongPress={() => {
          openModel(item.id);
        }}
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
      <PopUpModal
        status={deleteModal}
        onCancel={onCloseModal}
        onDelete={onDelete}
      />
    </View>
  );
}
