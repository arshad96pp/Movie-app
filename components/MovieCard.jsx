import { View, Text, FlatList, ImageBackground, ScrollView, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";
import instance from "../services/baseUrl";
import { imageBaseUrl } from "../services/request";
import { useNavigation } from "@react-navigation/native";


const MovieCard = ({ title, requestMovie }) => {
  const navigate = useNavigation();

  const [movieData, setMovieData] = useState([]);

  const fetchMovieData = async () => {
    const movieItem = await instance.get(requestMovie);
    setMovieData(movieItem.data.results);
  };
  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <ScrollView>
      <Text className="text-white font-poppins mb-2 mt-3">{title}</Text>
      <FlatList
       horizontal
       data={movieData}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableHighlight  className='bg-gray-700 mr-2 w-36 rounded-md h-48 overflow-hidden' onPress={()=>navigate.navigate('details',{item})}>
                <ImageBackground className='flex-1 ' source={{uri:`${imageBaseUrl}${item?.poster_path}`}}>

                </ImageBackground>
            </TouchableHighlight>
        )}
      />
    </ScrollView>
  );
};

export default MovieCard;
