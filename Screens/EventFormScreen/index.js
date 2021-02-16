import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { updateEvent, createEvent } from '../../redux/actions/eventActions';

import styles from './styles';

export default function EventFormScreen({ navigation }) {
  const dispatch = useDispatch();
  return (
    <KeyboardAvoidingView  behavior="height" style={styles.container}>
      <Formik
        initialValues={{
          title: '',
          category: '',
          description: '',
          city: '',
          venue: '',
        }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(createEvent(values));
          navigation.navigate('home');
        }}>
        {(props) => (
          <View>
            <TextInput
              style={styles.inputFields}
              placeholder="Event Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

            <TextInput
              style={styles.inputFields}
              placeholder="Event Category"
              onChangeText={props.handleChange('category')}
              value={props.values.category}
            />

            <TextInput
              multiline
              style={styles.inputFieldsdesc}
              placeholder="Event Description"
              onChangeText={props.handleChange('description')}
              value={props.values.description}
            />

            <TextInput
              style={styles.inputFields}
              placeholder="Event City"
              onChangeText={props.handleChange('city')}
              value={props.values.city}
            />

            <TextInput
              style={styles.inputFields}
              placeholder="Event Venue"
              onChangeText={props.handleChange('venue')}
              value={props.values.venue}
            />

            <TouchableOpacity style={styles.btn} onPress={props.handleSubmit}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={{ height: 60 }} />
    </KeyboardAvoidingView>
  );
}
