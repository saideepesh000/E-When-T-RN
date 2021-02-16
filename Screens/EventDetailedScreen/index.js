import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function EventDetailedScreen({ route: { params } }) {
  return (
    <SafeAreaView style={styles.eventDetailedScreen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.hostView}>
          <Image
            resizeMode="cover"
            style={styles.hostImg}
            source={{ uri: params.hostPhotoURL }}
          />
          <Text style={styles.hostText}>Hosted by {params.hostedBy}</Text>
        </View>
        <ImageBackground
          resizeMode="cover"
          style={styles.coverImg}
          source={{ uri: params.coverImg }}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} />
          <Text style={styles.title}>{params.title} is</Text>
        </ImageBackground>
        <TouchableOpacity style={styles.btn} >
          <Text style={styles.btnText}>Join </Text>
        </TouchableOpacity>
        <View style={styles.aboutView}>
          <Text style={styles.aboutText}>About</Text>
          <Text style={styles.descriptionText}>{params.description}</Text>
        </View>
        <View style={styles.aboutView}>
          <Text style={styles.aboutText}>Address</Text>
          <Text style={styles.descriptionText}>{params.venue}</Text>
        </View>
        <View style={styles.aboutView}>
          <Text style={styles.aboutText}>Address</Text>
          <Text style={styles.descriptionText}>{params.venue}</Text>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}
