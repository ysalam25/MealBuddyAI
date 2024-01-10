import { StyleSheet, Text, View } from 'react-native';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

import RootStack from './navigators/RootStack';

export default function App() {
  return (
    <RootStack/>
  );
}