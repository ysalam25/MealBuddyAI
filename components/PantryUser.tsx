import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { API } from 'aws-amplify';
import { styles } from "../components/screen/EditProfileScreen";
import { colors } from '../components/constants/colors';

const PantryUser = ({ navigation, route }) => {
    const { userId } = route.params;
    const [pantries, setPantries] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPantries();
    }, []);

    const fetchPantries = async () => {
        setLoading(true);
        try {
            const apiName = 'mealbuddyapi';
            const path = `/users/${userId}/pantries`;
            const response = await API.get(apiName, path, {});
            console.log('Pantries:', response.body);
            const pantriesArray = JSON.parse(response.body);
            setPantries(pantriesArray);
        } catch (error) {
            console.error('Error fetching pantries:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleEnterFoodItem = (pantryId) => {
        // Navigate to the page where you can enter food items for the selected pantry
        navigation.navigate('EnterFoodItemScreen', { userId, pantryId });
    };

    return (
        <View style={styles.StyledContainer}>
            <View style={styles.InnerContainer}>
                <Text style={styles.SubTitle}>Pantry</Text>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    pantries.map((pantry, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.button1}
                            onPress={() => handleEnterFoodItem(index)}
                        >
                            <Text style={styles.ButtonText}>{pantry}</Text>
                        </TouchableOpacity>
                    ))
                )}
            </View>
        </View>
    );
};

export default PantryUser;