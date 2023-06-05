import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ExploreScreen = () => {
  return (
    // ScrollView to enable scrolling when content exceeds screen height
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.background}>
        {/* Title */}
        <Text style={styles.title}>About</Text>
        {/* Description */}
        <Text style={styles.description}>
          Welcome to the Spectacles Review App! Whether you're a fashion enthusiast or in need of the perfect pair of
          spectacles, this app is here to help. Discover a wide range of spectacles, read reviews from other users, and
          share your own experiences.
        </Text>
        {/* Section title */}
        <Text style={styles.sectionTitle}>Features</Text>
        {/* Container for feature items */}
        <View style={styles.featureContainer}>
          {/* Feature item 1 */}
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Browse Spectacles</Text>
            <Text style={styles.featureDescription}>
              Explore a vast collection of spectacles from various brands and styles. Find the perfect pair that suits your
              taste and needs.
            </Text>
          </View>
          {/* Feature item 2 */}
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Read Reviews</Text>
            <Text style={styles.featureDescription}>
              Gain insights from detailed reviews and ratings provided by other users. Get a comprehensive understanding of
              the spectacles before making a purchase decision.
            </Text>
          </View>
          {/* Feature item 3 */}
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Write Reviews</Text>
            <Text style={styles.featureDescription}>
              Share your own experiences and thoughts by leaving reviews and ratings for the spectacles you've tried. Help
              other users make informed choices.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  background: {
    backgroundColor: '#89ABE3',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    lineHeight: 22,
    textAlign: 'justify',
    color: '#101820',
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  featureContainer: {
    marginBottom: 20,
  },
  featureItem: {
    marginBottom: 15,
    backgroundColor: '#EA738D',
    borderRadius: 8,
    padding: 15,
    elevation: 2,
  },
  featureTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  featureDescription: {
    fontSize: 17,
    lineHeight: 22,
    color: '#fff',
  },
});
