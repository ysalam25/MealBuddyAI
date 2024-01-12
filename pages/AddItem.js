import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { StyledContainer, InnerContainer, StyledButton, ButtonText, SubTitle} from "../components/styles";

import iconCamera from "../assets/icon-add-camera.png";
import iconPlus from "../assets/icon-add-plus.png";

const AddItem = ({ isVisible, onClose }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scannedData, setScannedData] = useState(null);

  const requestCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleContinue = () => {
    // Implement logic for continue button
  };

  const handleScanAgain = () => {
    setScannedData(null);
  };

  const handleScanWithCamera = async () => {
    if (!hasPermission) {
      await requestCameraPermission();
    }
    setScannedData(null);
  };

  useEffect(() => {
    // Cleanup function to reset scanned state when the modal is closed
    return () => {
      setScannedData(null);
    };
  }, [isVisible]);

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      {scannedData ? (
        <View style={styles.modalContainer}>
          <View style={styles.popupContent}>
            <SubTitle>{scannedData}</SubTitle>
            <StyledButton onPress={handleContinue}>
              <ButtonText>Continue</ButtonText>
            </StyledButton>
            <StyledButton onPress={handleScanAgain}>
              <ButtonText>Scan Again</ButtonText>
            </StyledButton>
          </View>
        </View>
      ) : (
        <View style={styles.modalContainer}>
          <View style={styles.popupContent}>
            <Text>Choose scanning preference</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={handleScanWithCamera}>
                <Image source={iconCamera} style={{ width: 30, height: 30, marginBottom: 10 }} />
                <Text>Scan with camera</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: 'center' }}>
                <Image source={iconPlus} style={{ width: 30, height: 30, marginBottom: 10 }} />
                <Text>Enter details manually</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {hasPermission && !scannedData && (
        <BarCodeScanner
          onBarCodeScanned={({ data }) => setScannedData(data)}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text>Close</Text>
      </TouchableOpacity>
      

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
