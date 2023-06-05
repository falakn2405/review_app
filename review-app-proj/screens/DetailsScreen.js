import React from "react";
import { View, Text, Button, ImageBackground, StyleSheet, Image } from 'react-native';
import { globalStyles, images } from "../styles/global";
import { useRoute } from "@react-navigation/native";
import Card from "../shared/card";

const DetailsScreen = ({ navigation }) => {
  // Get the route object from the navigation stack
  const route = useRoute();

  // Extract the necessary data from the route params
  const { title, body, price, rating, image } = route.params;

  // Background image
  const back = {uri: 'https://www.shutterstock.com/shutterstock/photos/432952330/display_1500/stock-vector-smile-sunglasses-tropical-summer-typography-t-shirt-graphics-vectors-432952330.jpg'};

  return (
    <View style={globalStyles.container}>
      {/* Display the background image */}
      <ImageBackground source={back} resizeMode="stretch" style={globalStyles.image}>
        <Card>
          <Image source={image} style={styles.image} />
          <Text style={globalStyles.reviewt}>{title}</Text>
          <Text style={globalStyles.reviewb}>{body}</Text>
          <Text style={globalStyles.reviewt}>Price: {price}</Text>

          <View style={styles.rating}>
            <Text>Spectacles Rating: </Text>
            <Image source={images.rating[rating]} />
          </View>
        </Card>
      </ImageBackground>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 200,
    marginBottom: 10,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
});
