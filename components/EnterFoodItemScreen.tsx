import React from "react";
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from "react-native";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";

interface FoodItem {
  name: string;
  barcode: string;
  brand: string;
  ingredient: number;
}

const FoodItemSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  barcode: Yup.string().required("Required").length(13, "Barcode must be exactly 13 characters long"),
  brand: Yup.string().required("Required"),
  ingredient: Yup.number().required("Required"),
});

interface EnterFoodItemScreenProps {
  navigation: {
    goBack: () => void;
  };
}

const EnterFoodItemScreen: React.FC<EnterFoodItemScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={{ name: "", barcode: "", brand: "", ingredient: 0 }}
        validationSchema={FoodItemSchema}
        onSubmit={(values: FoodItem) => {
          console.log(values);
          navigation.goBack();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }: FormikProps<FoodItem>) => (
          <View style={styles.formContainer}>
            {/* TextInput and Text components... */}

            <Button onPress={handleSubmit as any} title="Submit" />
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