// DietaryPreferences.js
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Button, View, TouchableOpacity, Text} from 'react-native';
import { Formik, Field } from 'formik';
import { Auth } from 'aws-amplify';
import { styles } from '../../components/screen/DietaryPreferenceScreen'
import DropDownPicker from 'react-native-dropdown-picker';
import { API } from 'aws-amplify';
import { colors } from '../../components/constants/colors';
import nutrition from '../../assets/data/nutrition-goals.json'
import dietss from '../../assets/data/diet.json'
import restrctions from '../../assets/data/restrictions.json'


const OnboardingPage1 = ({ navigation,route }: { navigation: any, route:any }) => {
  const name  = "Yusra";

  return (
    <View style={styles.StyledContainer}>
      <View style={styles.InnerContainer}>
          <Text style={styles.SubTitle}>Hey {name}!Before we get started lets get your preferences in. </Text>
          <Text style={styles.ExtraText}>This will be used to help provide recipe reccomendations.</Text>
          <Button title="Next" onPress={() => navigation.navigate("DietaryPreferences", { name: name })} />
      </View>
    </View>
  );
};

export default OnboardingPage1;
