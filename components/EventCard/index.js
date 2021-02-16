import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../redux/actions/eventActions';

import styles from './styles';

export default function EventCard({ event, navigation }) {
  const dispatch = useDispatch();
  return (
    <View style={styles.cardContainer}>
      <View style={styles.eventHost}>
        <Image
          resizeMode={'cover'}
          style={styles.hostImg}
          source={{ uri: event.hostPhotoURL }}
        />
        <View style={styles.eventNameContainer}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.hostedBy}>Hosted by {event.hostedBy}</Text>
        </View>
      </View>

      <View style={styles.eventTime}>
        <Text>{event.date}</Text>
        <Text>{event.city}</Text>
      </View>

      <View style={styles.eventAttendees}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.id}
          data={event.attendees}
          renderItem={({ item }) => (
            <Image
              resizeMode="cover"
              style={styles.attendeeImg}
              source={{ uri: item.photoURL }}
            />
          )}
        />
      </View>
      <View style={styles.eventMore}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EventDetailedScreen', event)}
          style={styles.viewButton}>
          <Text style={styles.view}>View </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(deleteEvent(event.id))}
          style={styles.delButton}>
          <Text style={styles.del}> Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
