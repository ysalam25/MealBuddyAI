import React, { useState } from 'react';
import * as Yup from 'yup';
import { Button, View, TouchableOpacity, Text } from 'react-native';
import { Formik, Field } from 'formik';
import { Auth } from 'aws-amplify';
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LoginContainer,
  StyledInputLabel,
  StyledButton,
  StyledTextInput,
  ButtonText,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "../components/styles";
import MultiSelect from 'react-native-multiple-select';

const validationSchema = Yup.object().shape({
  dietaryRestrictions: Yup.string()
    .required('Dietary Restrictions is required'),
  nutritionGoals: Yup.string()
    .required('Nutrition Goals is required'),
  dislikes: Yup.string()
    .required('Dislikes is required'),
  allergies: Yup.string()
    .required('Allergies is required'),
});

const DietaryPreferences = ({ navigation }: { navigation: any }) => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [nutritionGoals, setNutritionGoals] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  
  const dietaryRestrictionsItems = [
    { id: 'vegan', name: 'Vegan' },
    { id: 'vegetarian', name: 'Vegetarian' },

  ];
  const nutritionGoalsItems = [
    { id: 'lose_weight', name: 'Lose Weight' },
    { id: 'gain_muscle', name: 'Gain Muscle' },

  ];

  const updateUserDietaryPreferences = async (dietaryPreferences: string[]) => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, {
        'custom:dietaryPreferences': dietaryPreferences.join(', '),
      });
    } catch (error) {
      console.error('error updating user attributes:', error);
    }
  };


  return (
    <StyledContainer>
    <InnerContainer>
      <SubTitle> What are your dietary preferences?</SubTitle>
      <Formik
        initialValues={{
          dietaryRestrictions: [],
          nutritionGoals: [],
          dislikes: [],
          allergies: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          updateUserDietaryPreferences(values.dietaryRestrictions); // Fix: Change 'values.dietaryPreferences' to 'values.dietaryRestrictions'
          navigation.navigate("Home");
        }}
        
      >
  
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
          <>
            
            <View> 
            <SubTitle>Dietary Restrictions:</SubTitle>
              <MultiSelect
                items={dietaryRestrictionsItems}
                uniqueKey="id"
                onSelectedItemsChange={(selectedItems) =>
                  setFieldValue('dietaryRestrictions', selectedItems)
                }
                selectedItems={values.dietaryRestrictions}
                selectText="Select..."
                searchInputPlaceholderText="Search..."
                onChangeInput={(text) => console.log(text)}
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#CCC"
                submitButtonText="Submit"
              />

              <SubTitle>Nutrition Goals:</SubTitle>
              <MultiSelect
                items={nutritionGoalsItems}
                uniqueKey="id"
                onSelectedItemsChange={(selectedItems) =>
                  setFieldValue('nutritionGoals', selectedItems)
                }
                selectedItems={values.nutritionGoals}
                selectText="Select..."
                searchInputPlaceholderText="Search..."
                onChangeInput={(text) => console.log(text)}
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#CCC"
                submitButtonText="Submit"
              />
            </View> 

            <StyledButton onPress={handleSubmit}>
              <ButtonText>Submit</ButtonText>
            </StyledButton>
          </>
        )}
      </Formik>
    </InnerContainer>
    </StyledContainer>
  );
};

export default DietaryPreferences;