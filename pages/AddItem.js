// ModalComponent.js
import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AddItem = ({ isVisible, onClose, children }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.popupContent}>
          {children}
        </View>

        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  popupContent: {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
  },
  closeButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default AddItem;
