import React from "react";
import { View, TextInput, Button, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";

const BarcodeSchema = Yup.object().shape({
  barcode: Yup.string().required("Barcode is required").length(13, "Barcode must be exactly 13 characters long"),
});

interface EnterFoodItemScreenProps {
  navigation: {
    navigate: (screenName: string, params: any) => void;
  };
}

const EnterFoodItemScreen: React.FC<EnterFoodItemScreenProps> = ({ navigation }) => {

  const handleSubmit = async (values: { barcode: string }) => {
    try {
      const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${values.barcode}.json`);
      const data = await response.json();
      if (data.status === 1) {
        navigation.navigate("ItemDetailsScreen", { itemData: data.product });
      } else {
        Alert.alert("Item not found", "No item found with this barcode.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while fetching item data.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={{ barcode: "" }}
        validationSchema={BarcodeSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }: FormikProps<{ barcode: string }>) => (
          <View style={styles.formContainer}>
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