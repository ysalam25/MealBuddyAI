import React from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const FoodItemSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  barcode: Yup.string()
    .required("Required")
    .length(13, "Barcode must be exactly 13 characters long"),
  brand: Yup.string().required("Required"),
  ingredient: Yup.number().required("Required"),
});

const EnterFoodItemScreen = ({ navigation }) => {
    
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={{ name: "", barcode: "", brand: "", ingredient: "" }}
        validationSchema={FoodItemSchema}
        onSubmit={(values) => {
          console.log(values);
          navigation.goBack();
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              placeholder="Name"
            />
            {touched.name && errors.name ? (
              <Text style={styles.errorText}>{errors.name}</Text>
            ) : null}

            <TextInput
              style={styles.input}
              onChangeText={handleChange("barcode")}
              onBlur={handleBlur("barcode")}
              value={values.barcode}
              placeholder="Barcode"
              keyboardType="numeric"
            />
            {touched.barcode && errors.barcode ? (
              <Text style={styles.errorText}>{errors.barcode}</Text>
            ) : null}

            <TextInput
              style={styles.input}
              onChangeText={handleChange("brand")}
              onBlur={handleBlur("brand")}
              value={values.brand}
              placeholder="Brand"
            />
            {touched.brand && errors.brand ? (
              <Text style={styles.errorText}>{errors.brand}</Text>
            ) : null}

            <TextInput
              style={styles.input}
              onChangeText={handleChange("ingredient")}
              onBlur={handleBlur("ingredient")}
              value={values.ingredient}
              placeholder="Ingredient ID"
              keyboardType="numeric"
            />
            {touched.ingredient && errors.ingredient ? (
              <Text style={styles.errorText}>{errors.ingredient}</Text>
            ) : null}

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
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
});

export default EnterFoodItemScreen;
