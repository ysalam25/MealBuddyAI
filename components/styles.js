import styled from "styled-components";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#ffffff",
  secondary: "#4D7E69",
  link: "#34A27F",
  lightdark: "#e3e3e3",
  darkLight: "#969696",
};

//consistent
const { primary, secondary, link, lightdark, darkLight } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 30}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const LoginContainer = styled.View`
  position: relative;
  top: 15%;
  align-items: center;
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
