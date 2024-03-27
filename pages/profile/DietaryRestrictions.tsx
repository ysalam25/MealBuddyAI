import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from '../../components/screen/EditProfileScreen';
import { API } from 'aws-amplify';
import { colors } from '../../components/constants/colors';

const DietaryRestrictions = ({ navigation, route }) => {
    const { userId } = route.params;
    const [currentAllergy, setCurrentAllergy] = useState([]);
    const [allergies, setAllergies] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState([]);

    const fetchAllergies = async () => {
        try {
            const apiName = 'mealbuddyapi';
            const response = await API.get(apiName, '/allergies', {});
            console.log('Allergy Response:', response.body);
            const AllergyArray = response.body;
            setAllergies(AllergyArray.map((preference: string, index: number) => ({
                label: preference,
                name: preference,
            })));
        } catch (error) {
            console.error('Error fetching allergies:', error);
        }
    };
    useEffect(() => {
        fetchAllergies();
    }, []);

    useEffect(() => {
        // Fetch the user's current diet from an API and set it as the initial value of the dropdown picker
        fetchCurrentAllergies();
    }, []);

    const fetchCurrentAllergies = async () => {
        setLoading(true);
        try {
            const apiName = 'mealbuddyapi';
            const path = `/users/${userId}`; // Assuming userId is correctly populated
            const response = await API.get(apiName, path, {});
            setCurrentAllergy(response.body.allergies);
            return response;
        } catch (error) {
            console.error('Error fetching user preferences:', error);
        } finally {
            setLoading(false); // Set loading to false after the function is done
        }
    };
    const handleDietChange = (value) => {
        setAllergies(value);
        setError(''); // Clear any previous error
    };

    const handleSavePreference = async () => {
        setLoading(true);
        try {
            await updateUserPreference(userId, [], [], currentValue);
            await fetchCurrentAllergies();
        } catch (error) {
            console.error('Error updating diet preference:', error);
            setError('An error occurred while updating your diet preference.');
            Alert.alert('Error', 'An error occurred while updating your diet preference.');
        } finally {
            setLoading(false);
        }
    };

    const updateUserPreference = async (user_id: string, diets: any, goals: any, allergy: any) => {
        setLoading(true);
        try {
            const apiName = 'mealbuddyapi';
            const path = `/users/${user_id}`;
            const init = {
                body: JSON.stringify({
                    "pathParameters": {
                        "user-id": user_id
                    },
                    "body": JSON.stringify({
                        "allergies": allergy,
                    })
                })
            };

            const response = await API.put(apiName, path, init);
            console.log('Response from updating user preferences:', response);
            return response;
        } catch (error) {
            console.error('Error updating user preferences:', error);
        } finally {
            setLoading(false); // Set loading to false after the function is done
        }
    }

    return (
        <View style={styles.StyledContainer}>
            <View style={styles.InnerContainer}>
                <Text style={styles.SubTitle}>Allergy</Text>
                <Text style={styles.sectionTitle}>Your current Allergies:</Text>
                <Text style={styles.sectionTitle1}>
                    {currentAllergy.length > 0 ? currentAllergy.join(', ') : 'No allergy'}
                </Text>
                <Text style={styles.sectionTitle}>To change allergy:</Text>
                <DropDownPicker
                    open={isOpen}
                    multiple={true}
                    setOpen={() => setIsOpen(!isOpen)}
                    value={currentValue}
                    items={allergies.map((allergies: { label: string, name: string }) => ({ label: allergies.name, value: allergies.label }))}
                    setValue={(selectedValues) => {
                        setCurrentValue(selectedValues);

                    }}

                    maxHeight={200}
                    autoScroll

                    placeholder='Select Your allergy'
                    placeholderStyle={{ color: colors.ink }}
                    showArrowIcon={true}


                    mode="BADGE"
                    listMode='FLATLIST'
                    searchable={true}
                    badgeDotColors={"#FFF"}
                    badgeColors={"#FFE7A0"}

                    searchTextInputStyle={{ height: 40 }}

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

export default DietaryRestrictions;