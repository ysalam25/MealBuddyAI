import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Avatar = () => {
    const [selectedIcon, setSelectedIcon] = useState('');

    const handleIconPress = (iconName: string) => {
        setSelectedIcon(iconName);
    };

    return (
        <View>
            <Text>Select an icon:</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => handleIconPress('user')}>
                    <Icon name="user" type="font-awesome" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleIconPress('heart')}>
                    <Icon name="heart" type="font-awesome" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleIconPress('star')}>
                    <Icon name="star" type="font-awesome" />
                </TouchableOpacity>
                {/* Add more icons here */}
            </View>
            {selectedIcon && (
                <Text>Selected icon: {selectedIcon}</Text>
            )}
        </View>
    );
};

export default Avatar;