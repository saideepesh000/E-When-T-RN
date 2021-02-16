import React from 'react';
import { Text, View, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import {useSelector} from 'react-redux';
import { Ionicons } from '@expo/vector-icons';


import EventCard from '../../components/EventCard';
import styles from './styles';

// import {sampleEvents} from '../../data/sampleEvents';

export default function EventsScreen({navigation}) {
  const {events} = useSelector(state => state.event)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={events}
        renderItem={({ item }) => <EventCard navigation={navigation} event={item} />}
      />
      <TouchableOpacity onPress={() => navigation.navigate('create')}  style={styles.createbtn}>
      <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
