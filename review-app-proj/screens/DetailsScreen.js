import React from "react";
import { View, Text, Button, ImageBackground } from 'react-native';
import { globalStyles } from "../styles/global";
import { useRoute } from "@react-navigation/native";

const DetailsScreen = ({ navigation }) => {
  // const { title } = route.params;
  // const { body } = route.params;
  // const { rating } = route.params;
  const route = useRoute();
  const image = {uri: 'https://www.shutterstock.com/shutterstock/photos/432952330/display_1500/stock-vector-smile-sunglasses-tropical-summer-typography-t-shirt-graphics-vectors-432952330.jpg'};
  
  return (
    <View style={globalStyles.container}>
      <ImageBackground  source={image} resizeMode="stretch" style={globalStyles.image}>
        <Text style={globalStyles.list}>Hello </Text>
        {/* <Text>title: {JSON.stringify(title)}</Text>
        <Text>body: {JSON.stringify(body)}</Text>
        <Text>rating: {JSON.stringify(rating)}</Text> */}
        {/* <Text>{ navigation.getParam('title') }</Text>
        <Text>{ navigation.getParam('body') }</Text>
        <Text>{ navigation.getParam('rating') }</Text> */}
        {/* <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <Text>{route.params.rating}</Text> */}
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </ImageBackground>
    </View>
  );
};

export default DetailsScreen;
