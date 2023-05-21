import React from "react";
import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { globalStyles } from "../styles/global";

const HomeScreen = ({navigation}) => {
  const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTARvSZCdShxkTFKUMXQgSfK71yBpDBAHX1BuZYuI2BMxhr47lFJRtrxsVlSnFIXf-v1p0&usqp=CAU'};
  const [reviews, setReviews] = useState([
    { title: 'Zelda Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: 1 },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: 2 },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: 3 },
  ]);

  return (
    <View style={globalStyles.container}>
      <ImageBackground  source={image} resizeMode="stretch" style={globalStyles.image}>
        <FlatList style={globalStyles.list}
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
              <Text style={globalStyles.titleText}>{ item.title }</Text>
            </TouchableOpacity>
          )}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;