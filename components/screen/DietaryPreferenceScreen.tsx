// Import necessary modules
import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { Dimensions } from "react-native";
import  Constants  from 'expo-constants';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

    StyledContainer1:{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.background,
        paddingHorizontal: width * 0.05,
        justifyContent: 'center',
      },
      InnerContainer1:{
        width: '100%',
        top: "-10%",
        alignItems: 'center',
       
      },
      SubTitle1:{
        fontSize: 24,
        fontWeight: '400',
        color: colors.ink,
        alignSelf: 'flex-start',
        paddingBottom: 5,
        paddingLeft: 5,
        paddingTop: 20,
        marginBottom: 10,
      },

      ExtraText:{
        fontSize: 16,
        fontWeight: '300',
        color: colors.ink,
        paddingBottom: 5,
        paddingLeft: 5,
        marginBottom: 10,
        marginRight: 10,
        alignSelf: 'flex-start',
        textAlign: 'auto',
      },

    ExtraView:{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        top: "-5%",  
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
    TextContainer:{
        justifyContent: "center",
        alignItems: "center",
    },
    ButtonContainer:{
        width: "50%",
        top: height * 0.2,

    },
    ErrorContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
        height: 20,
    },
    BottomContainer:{
        justifyContent: "space-evenly",
        alignItems: "center",
        height: height / 7,
        gap: 20,
        top: "8%",
    },
    skipButton:{
        backgroundColor: "#FFF",
        borderColor: '#F87D57',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        height: height * 0.07,
        width: '100%',
        marginTop: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderWidth: 1,
    },
    ErrorText:{
        fontSize: 14,
        marginTop: 5,
        textAlign: "center",
    },
    ErrorIcon:{
        width: 20,
        height: 20,
        marginRight: 5,
        flexDirection: "row",
        marginBottom: 10,
    },
    SelectionContainer:{
        flexDirection: "column",
        width: width * 1.1,
        paddingHorizontal: 60,
    },
    StyledContainer: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.background,
        paddingHorizontal: width * 0.05,
      },
      InnerContainer: {
        top: height * 0.03,
        width: '100%',
        alignItems: 'center',
      },
      SubTitle: {
        fontSize: 23,
        fontWeight: '500',
        color: colors.ink,
        alignSelf: 'flex-start',
        paddingBottom: 5,
        paddingHorizontal: 10,
        paddingTop: 25,
        marginBottom: 10,
      },
      MultiSelectContainer: {
        width: '100%',
        borderRadius: 15,
        padding: 10,
        paddingTop: 0,
        zIndex: 1000,
      },
      MultiSelectContainer1: {
        width: '100%',
        borderRadius: 15,
        padding: 10,
        paddingTop: 0,
        zIndex: 999,
      
      },
      MultiSelectContainer2: {
        width: '100%',
        borderRadius: 15,
        padding: 10,
        paddingTop: 0,
        zIndex: 998,
      
      },
      StyledButton: {
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        height: height * 0.07,
        width: '100%',
        marginTop: 20,
      },
      ButtonText: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: '600',
      },
      SkipButtonText: {
        color: colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
      },
      SelectContainer:{
        height: 54,
        paddingLeft: 20,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: colors.ink,
        borderRadius: 15,
      },
      RowContainer:{
        height: 60,
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 10,
      },
      ListContainer:{
        height: 180,
      },
      ButtonContainer1:{
        justifyContent: 'center',
        alignItems: 'center',
        top: height * 0.3,
        width: '50%',
      },
});
