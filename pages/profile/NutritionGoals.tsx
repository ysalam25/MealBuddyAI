import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from '../../components/screen/EditProfileScreen';
import { API } from 'aws-amplify';
import { colors } from '../../components/constants/colors';

const NutritionGoals = ({ navigation , route}) => {
    const {userId} = route.params; 
    const [currentGoals, setCurrentGoals] = useState([]);
    const [goals, setGoals] = useState([]); 
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState([]);

    const fetchGoals = async () => {
        try {
          const apiName = 'mealbuddyapi'; 
          const response = await API.get(apiName, '/goals', {});
          console.log('Dietary Preference:', response.body);
          const goals = response.body;
          setGoals(goals.map((goal: any) => ({ 
            label: goal.name, 
            name: goal.name,
          })));
        } catch (error) {
          console.error('Error fetching nutrition goals:', error);
        }
      };
    
      useEffect(() => {
        fetchGoals();
      }, []);

    useEffect(() => {
        // Fetch the user's current diet from an API and set it as the initial value of the dropdown picker
        fetchCurrentGoals();
    }, []);

    const fetchCurrentGoals = async () => {
        setLoading(true); 
                try {
                    const apiName = 'mealbuddyapi'; 
                    const path = `/users/${userId}`; // Assuming userId is correctly populated
                    const response = await API.get(apiName, path,{}); 
                    setCurrentGoals(response.body.goals);
                    return response;
                } catch (error) {
          console.error('Error fetching user preferences:', error);
        } finally {
          setLoading(false); // Set loading to false after the function is done
        }
    };
    const handleDietChange = (value) => {
        setGoals(value);
        setError(''); // Clear any previous error
    };

    const handleSavePreference = async () => {
        setLoading(true);
        try {
            await updateUserPreference(userId, [], currentValue, []);
            await fetchCurrentGoals();
        } catch (error) {
            console.error('Error updating diet preference:', error);
            setError('An error occurred while updating your diet preference.');
            Alert.alert('Error', 'An error occurred while updating your diet preference.');
        } finally {
            setLoading(false);
        }
    };

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
                <Text style={styles.SubTitle}>Nutrition Goals</Text>
                <Text style={styles.sectionTitle}>Your current Nutrition Goals:</Text>
                <Text style={styles.sectionTitle1}>{currentGoals.join(', ')}</Text>
                <Text style={styles.sectionTitle}>To change nutrition goal:</Text>
               <DropDownPicker
                  open={isOpen}
                  multiple={true}
                  setOpen={() => setIsOpen(!isOpen)}
                  value={currentValue}
                  items={goals.map((goal: { label: string, name: string }) => ({ label: goal.name, value: goal.label}))}
                  setValue={(selectedValues) => {
                    setCurrentValue(selectedValues);
                   
                  }}
                 
                  maxHeight={200}
                  autoScroll

                  placeholder='Select Your Goals'
                  placeholderStyle={{ color: colors.ink }}
                  showArrowIcon={true}

                  
                  mode="BADGE"
                  listMode='FLATLIST'
                  searchable={true}
                  badgeDotColors={"#FFF"}
                  badgeColors={"#FFE7A0"}

                  searchTextInputStyle={{height: 40}}

                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.StyledButton} onPress={handleSavePreference} disabled={loading}>
                        <Text style={styles.ButtonText}>Save</Text>
                    </TouchableOpacity>
                    {loading && <ActivityIndicator size="large" color="#0000ff" />}
                </View>
            </View>
        </View>
    );
};

export default NutritionGoals;