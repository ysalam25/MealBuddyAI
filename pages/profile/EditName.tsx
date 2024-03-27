import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Auth } from 'aws-amplify';
import { styles } from '../../components/screen/EditProfileScreen';

const EditName = ({ navigation , route}) => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleNameChange = (value) => {
        setName(value);
        setError(''); // Clear any previous error
    };



    const handleSubmit = async () => {
        if (!name.trim()) {
            setError('Name cannot be empty.');
            return;
        }

        setLoading(true);
        try {
            const user = await Auth.currentAuthenticatedUser();
            await Auth.updateUserAttributes(user, {
                'name': name,
            });
            navigation.goBack();
            Alert.alert('Success', 'Your name has been updated.');
        } catch (error) {
            console.error('Error updating profile:', error);
            setError(error.message || 'An error occurred while updating your name.');
            Alert.alert('Error', error.message || 'An error occurred while updating your name.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.StyledContainer}>
            <View style={styles.InnerContainer}>
                <Text style={styles.SubTitle}>Edit Your Name</Text>
                <Text style={styles.sectionTitle}>Enter your new name below.</Text>
                <TextInput 
                    style={styles.row}
                    value={name}
                    onChangeText={handleNameChange}
                    placeholder="Enter new name"
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.StyledButton} onPress={handleSubmit} disabled={loading}>
                        <Text style={styles.ButtonText}>Save Changes</Text>
                    </TouchableOpacity>
                    {loading && <ActivityIndicator size="large" color="#0000ff" />}
                </View>
            </View>
        </View>
    );
};

export default EditName;