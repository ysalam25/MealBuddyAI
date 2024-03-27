import React, {useState, useEffect} from "react";
import { View, TextInput, Button, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { Formik, FormikProps } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";

import * as Yup from "yup";
import { colors } from "./constants/colors";


const BarcodeSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  quantity: Yup.number().required("Quantity is required"),
  expirationDate: Yup.date().required("Expiration date is required"),
});

interface EnterFoodItemScreenProps {
  navigation: {
    navigate: (screenName: string, params: any) => void;
  };
}

const EnterFoodItemScreen: React.FC<EnterFoodItemScreenProps> = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [unitTypes, setUnitTypes] = useState([]);


  useEffect(() => {
    const fetchCategoriesAndUnitTypes = async () => {
      // try {
      //   const categoriesResponse = await fetch('YOUR_CATEGORIES_API_URL');
      //   const categoriesData = await categoriesResponse.json();
      //   setCategories(categoriesData);

      //   const unitTypesResponse = await fetch('YOUR_UNIT_TYPES_API_URL');
      //   const unitTypesData = await unitTypesResponse.json();
      //   setUnitTypes(unitTypesData);
      // } catch (error) {
      //   Alert.alert("Error", "An error occurred while fetching data.");
      // }
    };

    fetchCategoriesAndUnitTypes();
  }, []);



  const handleSubmit = async () => {
    // Handle form submission
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.Subtitle}>Enter Food Item</Text>
      <Formik
        initialValues={{name: "", quantity: "", expirationDate: "", category: "", unitType: "" }}
        validationSchema={BarcodeSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }: FormikProps<{ name: string, quantity: string, expirationDate: string, category: string, unitType:string }>) => {
          return (
            <View style={styles.formContainer}>
               <TextInput
              style={styles.input}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              placeholder="Name"
            />
          <TextInput
              style={styles.input}
              onChangeText={handleChange("expirationDate")}
              onBlur={handleBlur("expirationDate")}
              value={values.expirationDate}
              placeholder="Expiration Date"
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChange("quantity")}
              onBlur={handleBlur("quantity")}
              value={values.quantity}
              placeholder="Quantity"
              keyboardType="numeric"
            />
              <Button onPress={handleSubmit as any} title="Submit" />
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.background,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginBottom: 10,
  },
  Subtitle:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  }
});

export default EnterFoodItemScreen;