import React from 'react';
import { View } from 'react-native';
import { RNCamera, BarCodeReadEvent } from 'react-native-camera';

interface CameraScreenProps {
  navigation: {
    goBack: () => void;
  };
}

const CameraScreen: React.FC<CameraScreenProps> = ({ navigation }) => {
  const onBarCodeRead = (e: BarCodeReadEvent) => {
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