// import React from "react";
// import {
//   StyledContainer,
//   InnerContainer,
//   PageTitle,
//   SettingTitle,
//   SubTitle,
//   StyledFormArea,
//   LoginContainer,
//   StyledInputLabel,
//   StyledButton,
//   StyledButton2,
//   StyledTextInput,
//   ButtonText,
//   ExtraView,
//   ExtraText,
//   TextLink,
//   TextLinkContent,
//   SlideContainer,
//   StyledSettingButton,
//   StyledSettingButtonText,
// } from "../../components/styles";

// import { Auth } from "aws-amplify";
// const Profile = ({ navigation }: { navigation: any }) => {
//   // Logic for resetting password
//   const handleResetPassword = () => {
//     console.log("Reset Password");
//     navigation.navigate("ForgotPassword");
//   };

//   // Logic for logging out
//   const handleLogout = async () => {
//     try {
//       await Auth.signOut();
//       console.log("Sign out successful");

//       navigation.reset({
//         index: 0,
//         routes: [{ name: "Walkthrough1" }],
//       });
//     } catch (error) {
//       console.log("Error signing out:", error);
//     }
//   };
//   return (
//     <StyledContainer>
//       <SettingTitle>Profile</SettingTitle>
//       <StyledSettingButton onPress={handleResetPassword}>
//         <StyledSettingButtonText>Reset Password</StyledSettingButtonText>
//       </StyledSettingButton>
//       <StyledSettingButton onPress={handleLogout}>
//         <StyledSettingButtonText>Logout</StyledSettingButtonText>
//       </StyledSettingButton>
//     </StyledContainer>
//   );
// };

import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import { colors } from '../../components/constants/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Auth } from "aws-amplify";

const Profile = ({ navigation }: { navigation: any }) => {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });
  const handleResetPassword = () => {
        console.log("Reset Password");
        navigation.navigate("ForgotPassword");
      };

      const handleLogout = async () => {
            try {
              await Auth.signOut();
              console.log("Sign out successful");
        
              navigation.reset({
                index: 0,
                routes: [{ name: "Walkthrough1" }],
              });
            } catch (error) {
              console.log("Error signing out:", error);
            }
          };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.profileAvatar} />

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Avatar');
                }}>
                <View style={styles.profileAction}>
                  <FeatherIcon
                    color="#fff"
                    name="edit-3"
                    size={15} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View>
            <Text style={styles.profileName}>John Doe</Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: colors.secondary }]}>
                <FeatherIcon color="#fff" name="edit-3" size={20} />
              </View>

              <Text style={styles.rowLabel}>Edit Profile</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: colors.secondary }]}>
                <MaterialCommunityIcons
                  color="#fff"
                  name="food-apple-outline"
                  size={20} />
              </View>

              <Text style={styles.rowLabel}>Current Diet</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: colors.secondary}]}>
                <MaterialCommunityIcons
                  color="#fff"
                  name="food-apple-outline"
                  size={20} />
              </View>

              <Text style={styles.rowLabel}>Nutrition Goals</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: colors.secondary }]}>
                <MaterialCommunityIcons
                  color="#fff"
                  name="food-apple-outline"
                  size={20} />
              </View>

              <Text style={styles.rowLabel}>Dietary Restrictions</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor:colors.secondary }]}>
                <MaterialCommunityIcons color="#fff" name="heart-off-outline" size={20} />
              </View>

              <Text style={styles.rowLabel}>Dislikes</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>
            
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>General</Text>

            <TouchableOpacity
              onPress={() => {
                handleResetPassword();
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: colors.secondary }]}>
                <MaterialCommunityIcons color="#fff" name="lock-outline" size={20} />
              </View>

              <Text style={styles.rowLabel}>Change Password</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleLogout();
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: colors.secondary }]}>
                <FeatherIcon color="#FFF" name="log-out" size={20} />
              </View>
              <Text style={styles.rowLabel}>Log out</Text>
              <View style={styles.rowSpacer}/>
              <FeatherIcon
                color="#C6C6C6"
      
                name="chevron-right"
                size={20} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    top: "5%"
    //backgroundColor: colors.background,
  },
  /** Profile */
  profile: {
    padding: 10,
    backgroundColor: colors.background,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
    top: 10,
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: colors.secondary,
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: '#989898',
    textAlign: 'center',
  },
  /** Section */
  section: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
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
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});

export default Profile;
