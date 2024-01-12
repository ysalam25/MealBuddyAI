import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const ScanBarcode = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <BarCodeScanner style={StyleSheet.absoluteFillObject} />

      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ScanBarcode;
