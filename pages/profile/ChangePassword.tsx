import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Auth } from 'aws-amplify';
import { styles } from '../../components/screen/EditProfileScreen';

const ChangePassword = ({ navigation }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCurrentPasswordChange = (value) => {
        setCurrentPassword(value);
        setError(''); // Clear any previous error
    };

    const handleNewPasswordChange = (value) => {
        setNewPassword(value);
        setError(''); // Clear any previous error
    };

    const handleSubmit = async () => {
        if (!newPassword.trim() || !currentPassword.trim()) {
            setError('Passwords cannot be empty.');
            return;
        }

        setLoading(true);
        try {
            const user = await Auth.currentAuthenticatedUser();
            await Auth.changePassword(user, currentPassword, newPassword);
            Alert.alert('Success', 'Your password has been updated.');
            navigation.goBack();
        } catch (error) {
            console.error('Error updating password:', error);
            setError(error.message || 'An error occurred while updating your password.');
            Alert.alert('Error', error.message || 'An error occurred while updating your password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.StyledContainer}>
            <View style={styles.InnerContainer}>
                <Text style={styles.SubTitle}>Change Your Password</Text>
                <TextInput
                    style={styles.row}
                    value={currentPassword}
                    onChangeText={handleCurrentPasswordChange}
                    placeholder="Enter current password"
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.row}
                    value={newPassword}
                    onChangeText={handleNewPasswordChange}
                    placeholder="Enter new password"
                    secureTextEntry={true}
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

export default ChangePassword;
