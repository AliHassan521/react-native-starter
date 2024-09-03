import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Ali Hassan',
      status: 'Developer',
      image:
        'https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png',
    },
    {
      uid: 2,
      name: 'John Doe',
      status: 'Designer',
      image:
        'https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png',
    },
    {
      uid: 3,
      name: 'Jane Doe',
      status: 'Manager',
      image:
        'https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png',
    },
    {
      uid: 4,
      name: 'Sara Ali',
      status: 'Developer',
      image:
        'https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, image}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: image}} style={styles.userImage} />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  container: {},
  userCard: {},
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userName: {},
  userStatus: {},
});
