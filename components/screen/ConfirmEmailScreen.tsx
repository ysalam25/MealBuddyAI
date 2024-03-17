import Constants from "expo-constants";
import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    StyledContainer:{
        flex: 1,
        padding: 25,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: colors.background,
        justifyContent: "space-evenly",
        //gap: 20,
    },
    InnerContainer:{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    LoginContainer:{
        alignItems: "center",
        height: "70%",
        justifyContent: "space-evenly",
    },
    ExtraView:{
        flexDirection: "row",
        alignItems: "center",
        //justifyContent: "space-evenly",
        //marginBottom: 10,
    },
    ExtraText:{
        alignItems: "center",
        fontSize: 15,
        fontWeight: "300",
        textAlign: "center",
        marginBottom: "5%",
    },
    ExtraTextBottom:{
        alignItems: "center",
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center",
    },
    SubTitle:{
        alignItems: "center",
        fontSize: 24,
        marginBottom: 20,
        fontWeight: "bold",
    },
    TextLink:{
        alignItems: "center",
    },
    TextLinkContent:{
        color: colors.link,
        fontSize: 15,
        textDecorationLine: "underline",
        fontWeight: "500",
    },
    TextForgotLinkContent:{
        color: colors.ink,
        fontSize: 15,
    },
    StyledFormArea:{
        width: "90%",
        borderStyle: "solid",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        top: "-7%", 
        gap: 10,
    },
    StyledInputLabel:{
        color: colors.darkLight,
        fontSize: 13,
        textTransform: "uppercase",
    },
    StyledTextInput:{
        backgroundColor: colors.colorWhite,
        padding: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.darkLight,
        fontSize: 16,
        height: 50,
        width: 300,
        marginVertical: 3,
        marginBottom: 10,
    },
    StyledButton:{
        padding: "3%",
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: width * 0.35,
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        marginTop: 5,
        marginBottom: 10,
        borderColor: '#F87D57',
        borderWidth: 1,
        height: height * 0.06,
    },
    ButtonText:{
        color: colors.primary,
        fontSize: 16,
        fontWeight: "bold",
    },
    TextContainer:{
        justifyContent: "center",
        alignItems: "center",
    },
    ButtonContainer:{
        justifyContent: "center",
        alignItems: "center",
    },
    BottomContainer:{
        justifyContent: "space-evenly",
        alignItems: "center",
        height: height / 6,
       top: "-22%",
    },
    ErrorContainer:{
        justifyContent: "center",
        alignItems: "center",
        width: 300,
    },
    ErrorText:{
        color: colors.secondary,
        fontSize: 14,
        marginBottom: 10,
        fontStyle: "italic",
        textAlign: "center",
    }
})
