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
        gap: -40,
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
        color: colors.darkLight,
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
        padding: "4%",
        width: width / 3,
        height: 40,
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 5,
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
        justifyContent: "space-around",
        alignItems: "center",
        height: height / 8,
    },
})
