// DietaryPreferences.js
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Button, View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import { Formik, Field } from 'formik';
import { Auth } from 'aws-amplify';
import { styles } from '../../components/screen/DietaryPreferenceScreen'
import DropDownPicker from 'react-native-dropdown-picker';
import { API } from 'aws-amplify';
import { colors } from '../../components/constants/colors';
import nutrition from '../../assets/data/nutrition-goals.json'
import dietss from '../../assets/data/diet.json'
import restrctions from '../../assets/data/restrictions.json'

const validate = (values: any) => {
  const errors: any = {};
  // Validate diets
  if (!values.diets || values.diets.length === 0) {
    errors.diets = 'At least one diet must be selected';
  }

  // Validate nutritionGoals
  if (!values.nutritionGoals || values.nutritionGoals.length === 0) {
    errors.nutritionGoals = 'At least one nutrition goal must be selected';
  }

  return errors;
};

const DietaryPreferences = ({ navigation,route }: { navigation: any, route:any }) => {
  const { name , userId} = route.params;
  //const userId = 'userId'; //remove

  const [loading, setLoading] = useState(false);

  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const [diet, setDiet] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);

  const [goals, setGoals] = useState([]);
  const [isOpen1, setIsOpen1] = useState(false);
  const [currentValue1, setCurrentValue1] = useState([]);

  const [allergies, setAllergies] = useState([]);
  const [isOpen2, setIsOpen2] = useState(false);
  const [currentValue2, setCurrentValue2] = useState([]);


  /////////////UNCOMMENT WHEN USING IT BUT FOR NOW USE THE DATA UNDER ASSESTS

  // const fetchNutritionGoals = async () => {
  //   try {
  //     const apiName = 'mealbuddyapi'; 
  //     const response = await API.get(apiName, '/goals', {});
  //     console.log('Nutrition Goals:', response.body);
  //     const goalsArray = response.body;
  //     setGoals(goalsArray.map((goal: any) => ({ 
  //       id: goal.goal_id.toString(), 
  //       name: goal.name,
  //     })));
  //   } catch (error) {
  //     console.error('Error fetching nutrition goals:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchNutritionGoals();
  // }, []);

  // const fetchAllergies= async () => {
  //   try {
  //     const apiName = 'mealbuddyapi'; 
  //     const response = await API.get(apiName, '/allergies', {});
  //     console.log('Allergy Response:', response.body);
  //     const AllergyArray = response.body;
  //     setAllergies(AllergyArray.map((preference: string, index: number) => ({
  //       id: index.toString(), 
  //       name: preference, 
  //     })));
  //   } catch (error) {
  //     console.error('Error fetching allergies:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchNutritionGoals();
  // }, []);

  //  const fetchDietaryRestrictions = async () => {
  //   try {
  //     const apiName = 'mealbuddyapi'; 
  //     const response = await API.get(apiName, '/diets', {});
  //     console.log('Dietary Preference:', response.body);
  //     const dietaryPreferences = response.body;
  //     setDiet(dietaryPreferences.map((preference: string, index: number) => ({
  //       id: index.toString(), 
  //       name: preference, 
  //     })));
  //   } catch (error) {
  //     console.error('Error fetching nutrition goals:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDietaryRestrictions();
  // }, []);

  const updateUserPreference = async (user_id: string, diets:any, goals:any, allergy:any ) => {
    setLoading(true); 
    try {
      const apiName = 'mealbuddyapi'; 
      const path =  `/users/${user_id}`;
      const init = {
        body: JSON.stringify({
          "pathParameters": {
            "user-id": user_id
          },
          "body": JSON.stringify({
            "diets": diets,
            "allergies": allergy,
            "goals": goals,
          })
        })
      };
    
      const response = await API.put(apiName, path, init);
      console.log('Response from updating user preferences:', response);
      return response;
    } catch (error) {
      console.error('Error updating user preferences:', error);
    }finally {
      setLoading(false); // Set loading to false after the function is done
    }
  }


  return (
    <View style={styles.StyledContainer}>
      <View style={styles.InnerContainer}>
        <Formik
          initialValues={{
            diets: [],
            nutritionGoals: [],
            allergies: [],
          }}
         
          validate={validate}
          onSubmit={async() => {
            console.log('Diets:', currentValue);
            console.log('Nutrition Goals:', currentValue1);
            console.log('Allergies:', currentValue2);
            try {
              const apiResponse = await updateUserPreference(userId, currentValue, currentValue1, currentValue2);
              console.log('API Response:', apiResponse);
              navigation.navigate("Home", { userId: userId , name: 'name'});
            } catch (error) {
              console.error('Error updating user preferences:', error);
            }
          }}

        >

          {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, setFieldTouched}) => (
            <>
              <Text style={styles.SubTitle}>Add Your Current Diet:</Text>
              <View style={styles.MultiSelectContainer}>
                <DropDownPicker
                  open={isOpen}
                  multiple={true}
                  setOpen={() => setIsOpen(!isOpen)}
                  value={currentValue}
                  items={dietss.map((diet) => ({ label: diet.name, value: diet.name }))}
                  setValue={(selectedValues) => {
                    // This will now correctly log the selected values array
                    setCurrentValue(selectedValues);
                    setFieldValue('diets', selectedValues); // Update the local state
                   
                  }}
                  maxHeight={200}
                  autoScroll

                  placeholder='Select Your Diet'
                  placeholderStyle={{ color: colors.ink }}
                  showArrowIcon={true}

                  
                  mode="BADGE"
                  listMode='FLATLIST'
                  searchable={true}
                  badgeDotColors={"#FFF"}
                  badgeColors={"#FFE7A0"}

                  searchTextInputStyle={{height: 40}}

                />
                <View style={styles.ErrorContainer}>
                {errors.diets && <Text style={styles.ErrorText}>{errors.diets}</Text>}
                </View>
              </View>

              <Text style={styles.SubTitle}>Set Your Nutrition Goals:</Text>
              <View style={styles.MultiSelectContainer1}>
                <DropDownPicker
                  open={isOpen1}
                  setOpen={() => setIsOpen1(!isOpen1)}
                  value={currentValue1}
                  items={nutrition.map((goal) => ({ label: goal.name, value: goal.name }))}
                  setValue={(newValue) => {
                    setCurrentValue1(newValue); // Update local state
                    setFieldValue('nutritionGoals', newValue);
                  }}
                  maxHeight={200}
                  autoScroll

                  placeholder='Select Your Goals'
                  placeholderStyle={{ color: colors.ink }}
                  showArrowIcon={true}

                  multiple={true}
                  mode="BADGE"
                  listMode='FLATLIST'
                  searchable={true}
                  badgeDotColors={"#FFF"}
                  badgeColors={"#FFE7A0"}

                  searchTextInputStyle={{height: 40}}

                  zIndex={1000}

                />
                <View style={styles.ErrorContainer}>
                {errors.nutritionGoals && <Text style={styles.ErrorText}>{errors.nutritionGoals}</Text>}
                </View>
                </View>

              <Text style={styles.SubTitle}>Set Your Dietary Restrictions:</Text>
              <View style={styles.MultiSelectContainer2}>
                <DropDownPicker
                  open={isOpen2}
                  setOpen={() => setIsOpen2(!isOpen2)}
                  value={currentValue2}
                  items={restrctions.map((goal) => ({ label: goal.name, value: goal.name }))}
                  setValue={(newValue) => {
                    setCurrentValue2(newValue); 
                    setFieldValue('allergies', newValue);
                  }}
                  maxHeight={200}
                  autoScroll

                  placeholder='Select Your Goals'
                  placeholderStyle={{ color: colors.ink }}
                  showArrowIcon={true}

                  multiple={true}
                  mode="BADGE"
                  listMode='FLATLIST'
                  searchable={true}
                  badgeDotColors={"#FFF"}
                  badgeColors={"#FFE7A0"}

                  searchTextInputStyle={{height: 40}}

                  zIndex={1000}

                />
                <View style={styles.ErrorContainer}>
                {errors.allergies && <Text style={styles.ErrorText}>{errors.allergies}</Text>}
                </View>
              </View>

              <View style={styles.ButtonContainer}>
              <TouchableOpacity style={styles.StyledButton} onPress={() => {handleSubmit();}}>
                  {loading ? (
                    <ActivityIndicator size="small" color="#0000ff" /> // Show loading indicator when loading
                  ) : (
                    <Text style={styles.ButtonText}>Submit</Text>
                  )}
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default DietaryPreferences;
