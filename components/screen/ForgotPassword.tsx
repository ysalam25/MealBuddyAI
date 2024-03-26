import Constants from "expo-constants";
import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { Dimensions} from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    StyledContainer:{
        flex: 1,
        padding: 25,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: colors.background,
        //justifyContent: "space-between",
    },
    InnerContainer:{
        flex: 1,
        width: "100%",
        alignItems: "center",
        // justifyContent: "space-evenly",
    },
    ResetContainer:{
        //alignItems: "center",
        height: "70%",
        top: "10%",
       // justifyContent: "center",
        //gap: 10,
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
        textAlign: "left",
    },
    SubTitle:{
        alignItems: "center",
        fontSize: 24,
        marginBottom: 40,
        fontWeight: "bold",
        alignSelf: "center",
    },
    TextLink:{
        textAlign: "left",
        fontWeight: "300",
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
        borderRadius: 12,
        borderColor: colors.lightdark,
        borderWidth: 1,
        marginBottom: 20,
        width: 300,
        color: colors.darkLight,
    },
    StyledInputLabel:{
        color: colors.darkLight,
        fontSize: 13,
        textAlign: "left",
    },
    StyledButton:{
        padding: "3%",
        height: 40,
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        width: width * 0.35,
        borderRadius: 12,
        marginTop: 5,
    },
    ButtonText:{
        color: colors.primary,
        fontSize: 16,
        fontWeight: "bold",
    },
    ButtonContainer:{
        justifyContent: "center",
        alignItems: "center",

    },
    ErrorText:{
        fontSize: 14,
        fontWeight: "400",
        marginBottom: 10,
        marginTop: -5,
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
        marginBottom: 10,
        marginTop: -5,
    },
})
