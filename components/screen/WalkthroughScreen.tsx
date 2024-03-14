import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { Padding, Border, FontFamily, FontSize } from '../constants/font';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        backgroundColor: colors.background,
    },
    slideContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        paddingBottom: "40%",
        bottom: "8%"

        
    },
    slideHeight:{
        height: height * 0.60,

    },
    image: {
        width: width * 0.7,
        height: height * 0.3,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: "10%",
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
        height: height * 0.20,
        backgroundColor: colors.background,
        bottom: "3%",
       // gap: spacing['6'],
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#F87D57',
        borderRadius: 5,
        width: width * 0.35,
        marginBottom: 10,
    },
    loginButton: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        width: width * 0.35,
        marginBottom: 10,
        borderColor: '#F87D57',
        borderWidth: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonBlackText: {
        color: '#F87D57',
        fontSize: 16,
        fontWeight: 'bold',
    },
    screen: {
        backgroundColor: colors.background,
        flex: 1,
    },
});