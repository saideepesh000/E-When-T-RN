import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './styles';

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.titleText}>MiVents</Text>
      <View>
        <TextInput style={styles.email} placeholder="Email" />
      </View>
      <View>
        <TextInput style={styles.password} placeholder="Password" />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
