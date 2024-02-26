import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const ScanBarcode = ({ onClose }: { onClose: any }) => {
  return (
    <View style={styles.container}>
      <Camera 
        style={StyleSheet.absoluteFillObject} 
        onBarCodeScanned={(barcode) => {
          console.log(barcode);
        }}
      />

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