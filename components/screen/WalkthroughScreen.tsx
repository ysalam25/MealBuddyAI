import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { Padding, Border, FontFamily, FontSize } from '../constants/font';
import { Dimensions } from 'react-native';

// Get the dimensions of the screen
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    slideContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        paddingBottom: "10%",
        
    },
    slideHeight:{
        height: height * 0.75,
    },
    image: {
        width: width * 0.7,
        height: height * 0.3,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 10,
        color: "#231714",
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        color: "#231714",
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: height * 0.25,
        backgroundColor: colors.background,
        gap : height * -0.08,
    },
    button: {
        marginHorizontal: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#F87D57',
        borderRadius: 5,
        width: width * 0.4,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    screen: {
        backgroundColor: colors.background,
        flex: 1,
    },
});