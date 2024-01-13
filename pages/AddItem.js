import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

import { StyledContainer, InnerContainer, StyledButton, StyledButton2, ButtonText, SubTitle, ItemSectionText} from "../components/styles";
import iconCamera from "../assets/icon-add-camera.png";
import iconPlus from "../assets/icon-add-plus.png";
import { Colors } from "../components/styles";

import barcodes from "../assets/data/barcode-scans.json";

const ItemScreen = styled.View`
  border: 2px solid ${Colors.primary};
  width: 100%;
  height: 80%;
  align-items: center;
  flex: 1;
`;

const AddItem = ({ isVisible, onClose }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scannedData, setScannedData] = useState(null);
  const navigation = useNavigation(); // Get the navigation object

  const requestCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleContinue = () => {
    // Navigate to the EditItem screen with the data parameter
    navigation.navigate('EditItem', { data: barcodes[scannedData], header: "Add Grocery Item" });
    
    // Close the AddItem window
    onClose();
  };

  const handleRequest = () => {
    console.log("request to add new item barcode")
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
            <SubTitle>Scanned Item</SubTitle>
            <ItemSectionText>{barcodes[scannedData]? barcodes[scannedData].name : "Sorry, the barcode "+scannedData+" is not in our database :-("}</ItemSectionText>
            
            {
                barcodes[scannedData] ?
            
            (<StyledButton onPress={handleContinue}>
              <ButtonText>Continue</ButtonText>
            </StyledButton>)
                :
            (<StyledButton onPress={handleRequest}>
              <ButtonText>Request Item</ButtonText>
            </StyledButton>)}

            <StyledButton2 onPress={handleScanAgain}>
              <ButtonText style={{ color: Colors.secondary}}>Scan Again</ButtonText>
            </StyledButton2>
          </View>
        </View>
      ) : (
        <View style={styles.modalContainer}>

          <View style={[styles.popupContent, { backgroundColor: 'darkgray' }]}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.mainText}>x</Text>
      </TouchableOpacity>
            <Text style={styles.mainText}>Choose scanning preference</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
              <TouchableOpacity style={styles.inputButtons} onPress={handleScanWithCamera}>
                <Image source={iconCamera} style={{ width: 30, height: 30, marginBottom: 10 }} />
                <Text>Scan with camera</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.inputButtons}>
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
    width: '95%',
    borderRadius: 30,
    margin: 10,
    paddingBottom: 40,

  },
  closeButton: {
    backgroundColor: 'darkgray',
    paddingBottom: 10,
    width: '100%',
  },
  inputButtons:{
    alignItems: 'center', 
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    border: 'black',
    
  },
  mainText:{  
    fontSize: 24, 
    fontWeight: '600', 
    color: 'white'
  },
});

export default AddItem;
