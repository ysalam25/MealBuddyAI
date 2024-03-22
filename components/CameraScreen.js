import React from 'react';
import { View, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = ({ navigation }) => {
  const onBarCodeRead = (e) => {
    console.log(e.data);
    navigation.goBack(); 
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        onBarCodeRead={onBarCodeRead}
      />
    </View>
  );
};

export default CameraScreen;
