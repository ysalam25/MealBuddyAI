import Constants from "expo-constants";
import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { Dimensions, View} from "react-native";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    StyledContainer:{
        flex: 1,
        padding: 25,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: colors.background,
        justifyContent: "space-evenly",

    },
    InnerContainer:{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",

    },
    RecipeContainer:{
        alignItems: "center",
        height: "70%",
        justifyContent: "space-evenly",
      
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
        textAlign: "center",
        fontSize: 24,
        marginTop: 5,
        marginBottom: -10,
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
    OverlappingScreen: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    OverlappingContent :{
        backgroundColor: colors.primary,
        padding: 20,
        borderRadius: 15,
        width: "90%",
        height: "80%",
       // gap: "10%",
      },
      OverlappingText:{
        color: colors.darkLight,
        fontSize: 16,
        textAlign: "center",  
      },
      OverlappingTitle:{
        color: "#231714",
        textAlign: "left",
        fontSize: 18,
        fontWeight: "500",
        padding: 10,
      },
      CategoryButton: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        margin: 5,
      },
      CategoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
      },
      CategoryButtonText: {
        color: '#231714',
        fontSize: 12,
        textAlign: 'center',
      },
      FilterButton: {
        display: 'flex',
        width: 125,
        paddingVertical: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F6EE',
        borderRadius: 12,
        margin: 5,
        borderWidth: 1,
        borderColor: '#000',
      },
      ApplyContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
      RatingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      

});

import React from 'react';

export const CrossSVGIcon = () => (
    <View style={stylesCrossSVG.container}>
      <View style={[stylesCrossSVG.line, stylesCrossSVG.line1]} />
      <View style={[stylesCrossSVG.line, stylesCrossSVG.line2]} />
    </View>
  );
  
  const stylesCrossSVG = StyleSheet.create({
    container: {
      width: 28,
      height: 26,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    line: {
      width: 28,
      height: 3,
      backgroundColor: "#231714",
      marginVertical: 3,
    },
    line1: {
      transform: [{ rotate: "45deg" }],
      position: "absolute",
    },
    line2: {
      transform: [{ rotate: "-45deg" }],
      position: "absolute",
    },
  });
  
  interface StarSVGIconProps {
    isFilled: boolean;
  }
  
  const starIconSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36">
      <path d="M17.0184 3.30024C17.4421 2.28142 18.8854 2.28144 19.3092 3.30025L22.7946 11.6801C22.9732 12.1096 23.3772 12.4031 23.8408 12.4403L32.8876 13.1656C33.9876 13.2537 34.4335 14.6264 33.5955 15.3442L26.7028 21.2486C26.3496 21.5512 26.1952 22.0261 26.3032 22.4785L28.4091 31.3066C28.6651 32.38 27.4974 33.2282 26.5558 32.6531L18.8104 27.9223C18.4135 27.6799 17.9142 27.6799 17.5173 27.9223L9.77189 32.6531C8.83023 33.2282 7.6626 32.38 7.91862 31.3066L10.0245 22.4785C10.1324 22.0261 9.97811 21.5512 9.62483 21.2486L2.73212 15.3442C1.89411 14.6264 2.34011 13.2537 3.44001 13.1656L12.4868 12.4403C12.9505 12.4031 13.3544 12.1096 13.5331 11.6801L17.0184 3.30024Z"/>
    </svg>
  `;
  export const StarSVGIcon: React.FC<StarSVGIconProps> = ({ isFilled }) => (
    <View style={stylesStarSVG.container}>
      <SvgXml xml={starIconSvg} width={37} height={36} fill={isFilled ? colors.secondary : '#DEE1E6'} />
    </View>
  );
  
  const stylesStarSVG = StyleSheet.create({
    container: {
      width: 37,
      height: 36,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  export const CategoryButton = styled.TouchableOpacity`
  border-radius: 12px;
  border: 1px solid #000;
  background: ${(props: { selected: any; }) => (props.selected ? colors.secondary : "#F9F6EE")};
  padding: 10px;
  margin: 5px;
`;

export const CategoryContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
`;

export const CategoryButtonText = styled.Text`
  color: #231714;
  font-size: 12px;
  text-align: center;
`;

export const FilterButton = styled.TouchableOpacity`
  display: flex;
  width: 125px;
  padding: 7px 0px;
  justify-content: center;
  align-items: center;
  background-color: #F9F6EE;
  border-radius: 12px;
  margin: 5px;
  border: 1px solid #000;
`;

export const ApplyContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  lign-content: center;
  padding: 10px;
`;
export const RatingContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
`;