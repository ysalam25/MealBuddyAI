// DietaryPreferences.js
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Button, View, TouchableOpacity, Text} from 'react-native';
import { Formik, Field } from 'formik';
import { Auth } from 'aws-amplify';
import { styles } from '../../components/screen/DietaryPreferenceScreen'

const OnboardingPage1 = ({ navigation,route }: { navigation: any, route:any }) => {
  //const name  = "Yusra"; //remove
 const {name, userId} = route.params; //use this

  return (
    <View style={styles.StyledContainer1}>
      <View style={styles.InnerContainer1}>
          <Text style={styles.SubTitle1}>Hey {name}! Before we get started lets get your preferences in. </Text>
          <Text style={styles.ExtraText}>This will be used to help provide recipe reccomendations.</Text>
          <View style={styles.ButtonContainer1}>
          <TouchableOpacity style={styles.StyledButton} onPress={() => navigation.navigate("DietaryPreferences", { name: name, userId: userId })}>
              <Text style={styles.ButtonText}>Next</Text>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

export default OnboardingPage1;
