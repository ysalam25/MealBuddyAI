import styled from "styled-components";
import { View, Image, Text, TextInput, TouchableOpacity ,StyleSheet} from "react-native";
import Constants from "expo-constants";
import { SvgXml, Path, LinearGradient, Stop } from "react-native-svg";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#ffffff",
  secondary: "#F87D57",
  link: "#F87D57",
  lightdark: "#e3e3e3",
  darkLight: "#969696",
  background: "#F9F6EE",
};

//consistent
const { primary, secondary, link, lightdark, darkLight, background } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 20}px;
  background-color: ${primary};
`;



export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;
export const SlideContainer = styled.View`
  position: relative;
  height: 55%;
  top: 5%;
  align-items: center;
`;

export const LoginContainer = styled.View`
  position: relative;
  top: 15%;
  align-items: center;
  justifycontent: center;
`;


export const SearchContainer = styled.View`
  justify-content: center;
  align-content: center;
  flex-direction: row;
  align-items: center; 
  width: 98%;
  position: relative;
`;



export const PageTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 30px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
`;
export const StyledFormArea = styled.View`
  width: 90%;
  border-style: solid;
`;

export const StyledTextInput = styled.TextInput`
  padding: 5px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 15px;
  border: 2px solid ${lightdark};
  padding: 15px;
  font-size: 16px;
  height: 50px;
  width: 300px;
  margin-vertical: 3px;
  margin-bottom: 10px;
`;

export const SearchTextInput = styled.TextInput`
  height: 40px;
  width: 90%;
  border: 1px solid white;
  background-color: white;
  border-radius: 12px;
  margin-right: 10px;
  padding: 8px;
  flex: 1;
`;

export const SearchTextInputWrapper = styled.View`
  height: 40px;
  width: 90%;

  background-color: white;
  border-radius: 12px;
  margin-right: 10px;
  padding: 8px;
  flex: 1;
`;



export const SearchTextInputIcon = styled.Image`
  height: 16px; 
  width: 16px; 
  margin-right: 8px; /* Add right margin to create space between the icon and the text */
`;

export const StyledInputLabel = styled.Text`
  color: ${lightdark};
  font-size: 13px;
  text-align: left;
`;

export const StyledButton = styled.TouchableOpacity`
  margin-top: 50px;
  padding: 15px;
  background-color: ${secondary};
  justify-content: center;
  border-radius: 15px;
  margin-vertical: 5px;
  height: 50px;
  width: 120px;
`;

export const SearchButton = styled.TouchableOpacity`
  height: 40px;
  width: 16px;
  justify-content: center;
  align-self: center;
`;

export const SearchButtonIcon = styled.Image`
  height: 16px; 
  width: 16px; 
  align-self: center;
`;


export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  text-align: center;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${darkLight};
  font-size: 15px;
`;
export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${link};
  font-size: 15px;
`;

/***Overlap screen for Filtered Search */
export const OverlappingScreen = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
  align-items: center;
`;

export const OverlappingContent = styled.View`
  background-color: ${primary};
  padding: 20px;
  border-radius: 15px;
  width: 90%;
  height: 80%;
  gap: 10%;
`;

export const OverlappingText = styled.Text`
  color: ${darkLight};
  font-size: 16px;
  text-align: center;
`;
export const OverlappingTitle = styled.Text`
  color: #231714;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  padding: 10px;
`;
export const CloseButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px;
  background-color: ${secondary};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 80px;
`;

export const CloseButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  text-align: center;
`;

export const CategoryButton = styled.TouchableOpacity`
  border-radius: 12px;
  border: 1px solid #000;
  background: ${(props) => (props.selected ? Colors.secondary : "#F9F6EE")};
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
const starIconSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36">
    <path d="M17.0184 3.30024C17.4421 2.28142 18.8854 2.28144 19.3092 3.30025L22.7946 11.6801C22.9732 12.1096 23.3772 12.4031 23.8408 12.4403L32.8876 13.1656C33.9876 13.2537 34.4335 14.6264 33.5955 15.3442L26.7028 21.2486C26.3496 21.5512 26.1952 22.0261 26.3032 22.4785L28.4091 31.3066C28.6651 32.38 27.4974 33.2282 26.5558 32.6531L18.8104 27.9223C18.4135 27.6799 17.9142 27.6799 17.5173 27.9223L9.77189 32.6531C8.83023 33.2282 7.6626 32.38 7.91862 31.3066L10.0245 22.4785C10.1324 22.0261 9.97811 21.5512 9.62483 21.2486L2.73212 15.3442C1.89411 14.6264 2.34011 13.2537 3.44001 13.1656L12.4868 12.4403C12.9505 12.4031 13.3544 12.1096 13.5331 11.6801L17.0184 3.30024Z"/>
  </svg>
`;
export const StarSVGIcon = ({ isFilled, color }) => (
    <View style={stylesStarSVG.container}>
      <SvgXml xml={starIconSvg} width={37} height={36} fill={isFilled ? Colors.secondary : '#DEE1E6'} />
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

export const RatingContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
`;

export const WalkthroughStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 0.6,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
    color: "#231714",
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 20,
  },
  button: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F87D57',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});