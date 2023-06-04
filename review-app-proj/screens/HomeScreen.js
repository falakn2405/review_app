import React from "react";
import { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, 
  ImageBackground, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import ReviewForm from "./ReviewForm";

const HomeScreen = ({navigation}) => {
  // Background Image 
  const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTARvSZCdShxkTFKUMXQgSfK71yBpDBAHX1BuZYuI2BMxhr47lFJRtrxsVlSnFIXf-v1p0&usqp=CAU'};
  const [modalOpen, setModalOpen] = useState(false);
  // List of Reviews 
  const [reviews, setReviews] = useState([
    { title: 'Costa Del Mar', rating: 5, price: '$277', body: 'In testing, we adored the crystal clear vision afforded by the Premium Polarized 580 Lenses on our test model sporting Green Polarized Mirror Glass. On bright days, the slightly amber lens provides a perfect blend of contrast and brightness reduction, with 10% light transmission.', key: 1 },
    { title: 'Maui Jim Stone', rating: 3, price: '$349', body: 'It lacks the adjustable nosepiece and comes in at an even higher price, so the Fantail Pro stands a slot above. But if you love the acetate frame style in a high-end pair of sunglasses, these are hard to beat.', key: 2 },
    { title: 'Smiths Wander', rating: 3, price: '$199', body: 'These sunglasses have a lightweight bio-based frame and stainless steel temples. The bridge width is 18mm, putting these shades in the category of a medium fit.', key: 3 },
    { title: 'Knockaround', rating: 2, price: ' $35', body: 'These are about as cheap as quality sunglasses come these days. Lower build quality and Lenses are not nearly as good as more expensive brands.', key: 4 },
    { title: 'Julbo Fury', rating: 4, price: '$140-$230', body: 'These sunglasses are light, comfortable, protective, and have the best adaptable, light-adjusting lenses on the market. This is awesome during winter morning runs before sunrise as they protect eyes from freezing winds.', key: 5 },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  }

  return (
    <View style={globalStyles.container}>
      <ImageBackground  source={image} resizeMode="stretch" style={globalStyles.image}>
        <Modal visible={modalOpen}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons
                name="close"
                size={26}
                style={{...styles.modalToggle, ...styles.modalToggle.modalClose}}
                onPress={() => setModalOpen(false)}
              />
              <ReviewForm addReview={addReview} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <MaterialIcons
          name="add"
          size={26}
          style={styles.modalToggle}
          onPress={() => setModalOpen(true)}
        />
        {/* FlatList used to display list items */}
        <FlatList style={globalStyles.list}
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
              <Card>
                <Text style={globalStyles.titleText}>{ item.title }</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1,
  }
})