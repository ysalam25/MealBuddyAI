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
        justifyContent: "space-between",
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
        gap: -20,
    },
    ExtraView:{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        top: "-10%",  
    },
    ExtraText:{
        alignItems: "center",
        fontSize: 15,
        fontWeight: "500",
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
    },
    TextForgotLinkContent:{
        color: colors.ink,
        fontSize: 15,
    },
    StyledFormArea:{
        width: "90%",
        borderStyle: "solid",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        top: "-7%", 
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
        bottom: "5%",

    },
    BottomContainer:{
        justifyContent: "space-evenly",
        alignItems: "center",
        height: height / 7,
        gap: 20,
        top: "8%",
    },
    ErrorText:{
        fontSize: 14,
        marginBottom: 10,
     
        textAlign: "center",
    },
    ErrorContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    ErrorIcon:{
        width: 20,
        height: 20,
        marginRight: 5,
        flexDirection: "row",
        marginBottom: 10,
       // marginTop: -5,
    },
})
