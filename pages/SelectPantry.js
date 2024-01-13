import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import pantryData from '../assets/data/pantry.json';

const SelectPantry = ({ onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPantry, setSelectedPantry] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handlePantrySelection = (pantry) => {
    setSelectedPantry(pantry);
    onSelect && onSelect(pantry); // Call the onSelect callback with the selected pantry
    closeModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <Text style={styles.dropdownButton}>
          {selectedPantry ? selectedPantry.label : 'Select Pantry'}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {pantryData.map((item) => (
              <TouchableOpacity key={item.value} onPress={() => handlePantrySelection(item)}>
                <View style={styles.dropdownItem}>
                  <Text style={styles.label}>{item.label}</Text>
                  <Text style={styles.numItems}>{`${item.numItems} items`}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  dropdownButton: {
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    padding: '2%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  numItems: {
    fontSize: 14,
    color: 'gray',
  },
});

export default SelectPantry;
