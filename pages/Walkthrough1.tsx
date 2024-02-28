import React from "react";
import { View, Text, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Button } from "react-native-elements";
import { WalkthroughStyles } from "../components/styles";
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LoginContainer,
  StyledInputLabel,
  StyledButton,
  StyledButton2,
  StyledTextInput,
  ButtonText,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  SlideContainer,
} from "../components/styles";
import slides from "../components/slides";
import { StackNavigationProp } from "@react-navigation/stack"; // Assuming you're using a stack navigator

// Define the props type, including the navigation prop
type Props = {
  navigation: StackNavigationProp<any>; // Replace 'any' with your navigation state type if available
};

const Walkthrough1: React.FC<Props> = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate("Signup");
  };

  const handleLogIn = () => {
    navigation.navigate("Login");
  };

  const renderSlides = () => {
    return slides.map((slide, index) => ({
      backgroundColor: "#F9F6EE",
      image: <Image source={slide.image} style={WalkthroughStyles.image} key={index} />,
      title: slide.title,
      subtitle: (
        <View style={WalkthroughStyles.buttonContainer} key={slide.title}>
          <Button
            title={"Sign Up"}
            onPress={handleSignUp}
            buttonStyle={WalkthroughStyles.button}
            titleStyle={WalkthroughStyles.buttonText}
          />
          <Button
            title={"Log In"}
            onPress={handleLogIn}
            buttonStyle={WalkthroughStyles.button}
            titleStyle={WalkthroughStyles.buttonText}
          />
          <TextLink onPress={() => navigation.navigate("Home")}>
            <TextLinkContent>Home</TextLinkContent>
          </TextLink>
          <TextLink onPress={() => navigation.navigate("Pantry")}>
            <TextLinkContent>Pantry (test)</TextLinkContent>
          </TextLink>
        </View>
      ),
      titleStyles: WalkthroughStyles.title,
      subTitleStyles: WalkthroughStyles.subtitle,
      buttonsContainerStyles: WalkthroughStyles.buttonContainer,
    }));
  };

  return (
    <Onboarding
      pages={renderSlides()}
      showSkip={false}
      showNext={false}
      showDone={false}
      bottomBarHighlight={false}
      bottomBarHeight={80}
      containerStyles={WalkthroughStyles.wrapper}
    />
  );
};

export default Walkthrough1;
