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
  const { name } = route.params;


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
    <View style={styles.StyledContainer}>
      <View style={styles.InnerContainer}>
        <Formik
          initialValues={{
            diets: [],
            nutritionGoals: [],
            allergies: [],
          }}
         
          validate={validate}
          onSubmit={(values) => {
            console.log(values);
            //api call to update user dietary preferences
            
            //updateUserDietaryPreferences(values.dietaryRestrictions);
            navigation.navigate("Home");
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
                  setValue={(callback) => {
                    const newValue = callback(currentValue); // Correctly compute the new value
                    setCurrentValue(newValue); // Update local state
                    console.log('Selected diets:', newValue);
                    setFieldValue('diets', newValue);
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
                  setValue={(callback) => {
                    const newValue = callback(currentValue1); // Correctly compute the new value
                    setCurrentValue1(newValue); // Update local state
                    console.log('Selected goals', newValue);
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
                  setValue={(callback) => {
                    const newValue = callback(currentValue2);
                    setCurrentValue2(newValue); 
                    console.log('Selected allergy:', newValue);
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
                <TouchableOpacity style={styles.StyledButton} onPress={() => {handleSubmit(); console.log(values)}}>
                  <Text style={styles.ButtonText}>Submit</Text>
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
