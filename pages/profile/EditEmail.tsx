import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, Alert, ActivityIndicator, Modal } from 'react-native';
import { Auth } from 'aws-amplify';
import { styles } from '../../components/screen/EditProfileScreen';

const EditEmail = ({ navigation, route }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (value) => {
        setEmail(value);
        setError(''); // Clear any previous error
    };

    const handleSubmit = async () => {
        if (!email.trim()) {
            setError('Email cannot be empty.');
            return;
        }

        setLoading(true);
        try {
            const user = await Auth.currentAuthenticatedUser();
            await Auth.updateUserAttributes(user, {
                'email': email,
            });
            setModalVisible(true);
            setLoading(false);
            Alert.alert('Success', 'Your email has been updated.');
        } catch (error) {
            console.error('Error updating profile:', error);
            setError(error.message || 'An error occurred while updating your email.');
            Alert.alert('Error', error.message || 'An error occurred while updating your email.');
            setLoading(false);
        }
    };

    // Function to handle email verification
    const handleVerifyEmail = async () => {
        try {
            await Auth.verifyCurrentUserAttributeSubmit('email', verificationCode);
            Alert.alert('Success', 'Email verification successful.');
            setModalVisible(false); // Close the modal
            navigation.goBack();
        } catch (error) {
            console.error('Error verifying email:', error);
            Alert.alert('Error', 'Failed to verify email. Please try again.');
        }
    };

    const resendVerificationCode = async () => {
        try {
            await Auth.verifyCurrentUserAttribute('email');
            Alert.alert('Success', 'A new verification code has been sent to your email.');
        } catch (error) {
            console.error('Error resending verification code:', error);
            Alert.alert('Error', error.message || 'An error occurred while resending the verification code.');
        }
    };

    return (
        <View style={styles.StyledContainer}>
            <View style={styles.InnerContainer}>
                <Text style={styles.SubTitle}>Edit Your Email</Text>
                <Text style={styles.sectionTitle}>Enter your new email below.</Text>
                <TextInput
                    style={styles.row}
                    value={email}
                    onChangeText={handleEmailChange}
                    placeholder="Enter new email"
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Verification modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalBackdrop}>
                        <View style={styles.modalView}>
                            <Text style={styles.sectionTitle}>Verify Your Email</Text>
                            <TextInput
                                style={styles.StyledTextInput}
                                placeholder="Enter verification code"
                                value={verificationCode}
                                onChangeText={setVerificationCode}
                            />
                            <View style={styles.ButtonContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={handleVerifyEmail}
                                >
                                    <Text style={styles.ExtraText}>Verify</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.ExtraText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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

export default EditEmail;