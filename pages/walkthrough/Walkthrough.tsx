import React from "react";
import { View, Text, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Button } from "react-native-elements";
import { WalkthroughStyles } from "../../components/styles";
import { styles } from "../../components/screen/WalkthroughScreen";
import slides from "../../components/slides";
import { StackNavigationProp } from "@react-navigation/stack"; 


type Props = {
  navigation: StackNavigationProp<any>; 
};

const Walkthrough: React.FC<Props> = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate("Signup");
  };

  const handleLogIn = () => {
    navigation.navigate("Login");
  };

  const renderSlides = () => {
    return slides.map((slide, index) => ({
      backgroundColor: "#F9F6EE",
      image: <Image source={slide.image} style={styles.image} key={index} />,
      title: slide.title,
      subtitle: '',
      titleStyles: WalkthroughStyles.title,
      subTitleStyles: WalkthroughStyles.subtitle,
      buttonsContainerStyles: WalkthroughStyles.buttonContainer,
    }));
  };

  return (
    <View style={WalkthroughStyles.wrapper}>
      <View style={styles.slideHeight}>
        <Onboarding 
          pages={renderSlides()}
          showSkip={false}
          showNext={false}
          showDone={false}
          bottomBarHighlight={false}
          containerStyles={styles.slideContainer}
          bottomBarHeight={30}
        />
      </View>
      <View style={styles.buttonContainer}>
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
      </View>
    </View>
  );
};

export default Walkthrough;
