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
        //alignItems: "center",
        justifyContent: "flex-start",
        gap: 10,
    },
    errorText:{
        color: colors.ink,
        fontSize: 14,
        marginBottom: 10,
        textAlign: "center",
    },
    EditContainer:{
        alignItems: "center",
        height: "70%",
        justifyContent: "flex-start",
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
        textAlign: "center",
        color: colors.colorWhite
    },
    SubTitle:{
        alignItems: "center",
        fontSize: 24,
        textAlign: "left",
        marginBottom: height * 0.01,
        marginTop: height * 0.05,
        fontWeight: "bold",
    },
    modalBackdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent backdrop
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: width * 0.8, // Take up 80% of screen width
       justifyContent: 'space-between',
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
        width: 250,
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
    button: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        width: 150, 
        height: 50,
        backgroundColor: colors.secondary, // Use the secondary color for button background
    },
    button1: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        width: 'auto', 
        height: 50,
        backgroundColor: colors.secondary, // Use the secondary color for button background
    },
    buttonClose: {
        backgroundColor: colors.primary, // Assuming primary color is suitable for a "close" or "verify" action
    },
    section: {
        paddingHorizontal: 24,
      },
      sectionTitle: {
        paddingVertical: 12,
        fontSize: 12,
        fontWeight: '600',
        color: colors.ink,
        textTransform: 'uppercase',
        letterSpacing: 1.1,
      },
      sectionTitle1: {
        paddingVertical: 12,
        fontSize: 12,
        fontWeight: '600',
        color: colors.secondary,
        textTransform: 'uppercase',
        letterSpacing: 1.1,
      },
      /** Row */
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        width : width * 0.9,
        backgroundColor: 'rgba(202, 178, 179, 0.3)',
        borderColor: "#D1D5DB",
        borderRadius: 8,
        marginBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
      },
      rowIcon: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        marginRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      rowLabel: {
        fontSize: 20,
        fontWeight: '400',
        color: '#0c0c0c',
      },
      rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
      },
})
