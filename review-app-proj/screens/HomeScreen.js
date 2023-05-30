import React from "react";
import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

const HomeScreen = ({navigation}) => {
  // Background Image 
  const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTARvSZCdShxkTFKUMXQgSfK71yBpDBAHX1BuZYuI2BMxhr47lFJRtrxsVlSnFIXf-v1p0&usqp=CAU'};
  // List of Reviews 
  const [reviews, setReviews] = useState([
    { title: 'Wayfarer Sunglasses', rating: 5, body: 'lorem ipsum', key: 1 },
    { title: 'Clubmaster Sunglasses', rating: 4, body: 'lorem ipsum', key: 2 },
    { title: 'Cat eye Sunglasses', rating: 3, body: 'lorem ipsum', key: 3 },
    { title: 'Coach Sunglasses', rating: 4, body: 'lorem ipsum', key: 4 },
    { title: 'Wraparound Sunglasses', rating: 4, body: 'lorem ipsum', key: 5 },
  ]);

  return (
    <View style={globalStyles.container}>
      <ImageBackground  source={image} resizeMode="stretch" style={globalStyles.image}>
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