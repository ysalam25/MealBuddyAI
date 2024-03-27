import React, { useState , useEffect} from 'react';
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
import { useIsFocused } from '@react-navigation/native';

const Profile = ({ navigation }: { navigation: any }) => {
  const isFocused = useIsFocused();
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [id, setId] = useState('');
  useEffect(() => {
    const fetchSessionAndUser = async () => {
      try {
        const session = await Auth.currentSession();
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
        setUserName(user.attributes.name);
        setId(user.attributes.sub);
      } catch (error) {
        console.log('error fetching session and user', error);
      }
    };

    fetchSessionAndUser();
  }, []);

  useEffect(() => {
    if (isFocused) {
      const fetchUserAttributes = async () => {
        try {
          const user = await Auth.currentAuthenticatedUser();
          setUserName(user.attributes.name);
        } catch (error) {
          console.log('error fetching user attributes', error);
        }
      };
      fetchUserAttributes();
    }
  }, [isFocused]);

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
                routes: [{ name: "Walkthrough" }],
              });
            } catch (error) {
              console.log("Error signing out:", error);
            }
          };
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.container}>
        <View style={styles.profile}>

          <View>
            <Text style={styles.profileName}>{userName}</Text>
          </View>
        </View>
<SafeAreaView style={{flex:1}}>
        <ScrollView contentContainerStyle={{ paddingBottom: "50%" }}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CurrentDiet", { userId: id })
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
                navigation.navigate("NutritionGoals", { userId: id })
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
                navigation.navigate("DietaryRestrictions", { userId: id })
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
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>My Recipes</Text>
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

              <Text style={styles.rowLabel}>Cooked</Text>

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

              <Text style={styles.rowLabel}>Favourites</Text>

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

              <Text style={styles.rowLabel}>Cookbook</Text>

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

              <Text style={styles.rowLabel}>Cook Later</Text>

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
                navigation.navigate("EditName", { name: userName, userId: id });
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: colors.secondary }]}>
                <FeatherIcon color="#fff" name="edit-3" size={20} />
              </View>

              <Text style={styles.rowLabel}>Edit Name</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("EditEmail", { name: userName, userId: id });
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: colors.secondary }]}>
                <FeatherIcon color="#fff" name="mail" size={20} />
              </View>

              <Text style={styles.rowLabel}>Edit Email</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ChangePassword");
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
        </SafeAreaView>
      </View>
    </View>
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
    fontSize:34,
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
