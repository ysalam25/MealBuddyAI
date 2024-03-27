import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../components/screen/EditProfileScreen';

const ComingSoon = () => {
    return (
        <View style={styles.StyledContainer}>
            <View style={styles.InnerContainer}>
                <Text style={styles.SubTitle}>Coming Soon</Text>
                <Text style={styles.sectionTitle}>This feature is coming soon.</Text>
            </View>
        </View>
    );
};

export default ComingSoon;