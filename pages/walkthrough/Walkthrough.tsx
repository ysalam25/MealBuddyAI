import React from "react";
import { View, Text, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Button } from "react-native-elements";
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
  const handleGoHome = () => {
    navigation.navigate("OnboardingPage1"); 
  };
  const handleGoPreferences = () => {
    navigation.navigate("DietaryPreferences"); 
  };
  
  const renderSlides = () => {
    return slides.map((slide, index) => ({
      backgroundColor: "#F9F6EE",
      image: <Image source={slide.image} style={styles.image} key={index} />,
      title: slide.title,
      subtitle: '',
      titleStyles: styles.title,
      subTitleStyles: styles.subtitle,
    }));
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.slideHeight}>
        <Onboarding 
          pages={renderSlides()}
          showSkip={false}
          showNext={false}
          showDone={false}
          bottomBarHighlight={false}
          bottomBarHeight={-50}
          containerStyles={styles.slideContainer}
          
        />
      </View>
      <View style={styles.buttonContainer}>
            <Button
              title={"Sign Up"}
              onPress={handleSignUp}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
            />
            <Button
              title={"Log In"}
              onPress={handleLogIn}
              buttonStyle={styles.loginButton}
              titleStyle={styles.buttonBlackText}
            />
              <Button
    title={"DietaryPre"}
    onPress={handleGoHome}
    buttonStyle={styles.button} 
    titleStyle={styles.buttonText}
  />
      </View>
      
    </View>
  );
};

export default Walkthrough;
