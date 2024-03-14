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
        // justifyContent: "space-evenly",
    },
    ResetContainer:{
        alignItems: "center",
        height: "70%",
        justifyContent: "center",
        // gap: 10,
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
        marginTop: 15,
    },
    StyledTextInput:{
        backgroundColor: colors.primary,
        padding: 15,
        paddingLeft: 55,
        paddingRight: 55,
        borderRadius: 5,
        borderColor: colors.lightdark,
        borderWidth: 1,
        marginBottom: 20,
        color: colors.darkLight,
    },
    StyledInputLabel:{
        color: colors.darkLight,
        fontSize: 13,
        textAlign: "left",
    },
    LeftIcon:{
        left: 15,
        top: 33,
        position: "absolute",
        zIndex: 1,
    },
    RightIcon:{
        right: 15,
        top: 33,
        position: "absolute",
        zIndex: 1,
    },
    StyledButton:{
        padding: 15,
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 20,
    },
    ButtonText:{
        color: colors.primary,
        fontSize: 12,
    },
    ButtonContainer:{
        justifyContent: "center",
        alignItems: "center",

    },
})
