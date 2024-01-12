// DietaryPreferences.js
import { Auth } from 'aws-amplify';
import { Formik } from 'formik';
import { Button, TextInput } from 'react-native';
import React from 'react';

const DietaryPreferences = ({ navigation }) => {
  const updateUserDietaryPreferences = async (dietaryPreferences) => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, {
        'custom:dietaryPreferences': dietaryPreferences,
      });
    } catch (error) {
      console.error('error updating user attributes:', error);
    }
  };

  return (
    <Formik
      initialValues={{ dietaryPreferences: '' }}
      onSubmit={(values) => {
        console.log(values);
        updateUserDietaryPreferences(values.dietaryPreferences);
        navigation.navigate('DietaryPreferences');
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <TextInput
            onChangeText={handleChange('dietaryPreferences')}
            onBlur={handleBlur('dietaryPreferences')}
            value={values.dietaryPreferences}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </>
      )}
    </Formik>
  );
};

export default DietaryPreferences;