import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult, PermissionResponse } from 'expo-barcode-scanner';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

type RootStackParamList = {
  ItemDetailsScreen: { itemData: any }; 
};

interface CameraScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'ItemDetailsScreen'>;
}

const CameraScreen: React.FC<CameraScreenProps> = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(true);
  
  useEffect(() => {
    (async () => {
      const { status }: PermissionResponse = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      setIsScanning(true); // Enable scanning when the screen is focused
    }, [])
  );
  const handleBarCodeScanned = async ({ type, data }: BarCodeScannerResult) => {
    if (!isScanning) return;
    setIsScanning(false);

    try {
      const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`);
      const responseData = await response.json();
      if (responseData.status === 1) {
        navigation.navigate("ItemDetailsScreen", { itemData: responseData.product });
      } else {
        Alert.alert("Item not found", "No item found with this barcode.", [
          { text: "OK", onPress: () => setIsScanning(true) }
        ]);
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while fetching item data.", [
        { text: "OK", onPress: () => setIsScanning(true) }
      ]);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CameraScreen;
