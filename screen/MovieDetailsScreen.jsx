import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { imageBaseUrl } from "../services/request";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { addMovieList } from "../redux/slices/navSlice";

const MovieDetailsScreen = () => {
  const [selectedSaveMovie,setSelectedSaveMovie]=useState([])
  const navigate = useNavigation();
  const { params } = useRoute();
  const { item } = params;

  const dispatch = useDispatch();
  const saveToListMovie = (selectedMovie) => {

    setSelectedSaveMovie(preives=>{
      if(preives.includes(selectedMovie?.id)){
        return preives.filter(Items=>Items !==selectedMovie?.id)
      }else{
        return [...preives,selectedMovie?.id]
      }

    })
    


    dispatch(addMovieList( selectedMovie ));
  };

  return (
    <View className="flex-1  bg-[#191919]">
      <View className="flex-1">
        <ImageBackground
          className="flex-1 relative"
          source={{ uri: `${imageBaseUrl}${item?.backdrop_path}` }}
        >
          <TouchableOpacity
            onPress={() => navigate.goBack()}
            className="absolute bg-slate-800 p-2 rounded-full left-[3%] top-[3%]"
          >
            <Ionicons name="arrow-back" size={25} color={"white"} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View className="flex-1 p-3">
        <View className="flex flex-row justify-between items-center mb-4">
          <Text className="text-white font-poppins">
            {item?.original_title}
          </Text>
          <Ionicons
            name="save"
            size={24}
            color={`${selectedSaveMovie.includes(item?.id)?'orange':'white'}`}
            onPress={() => saveToListMovie(item)}
          />
        </View>

        <View className="flex flex-row items-center mb-3">
          <View className=" w-6 h-6 border border-orange-400 rounded-lg  flex justify-center items-center ">
            <Text className="text-white font-poppins text-xs">
              {item.original_language}
            </Text>
          </View>

          <View className=" w-auto p-1 h-6 border border-orange-400 rounded-lg  flex justify-center items-center ml-2">
            <Text className="text-white font-poppins text-xs">
              {item.release_date}
            </Text>
          </View>
        </View>

        <View className="flex flex-row justify-between items-center mb-3">
          <TouchableOpacity className="bg-orange-400 w-[49%] py-2 flex justify-center items-center rounded-lg">
            <Text className="text-white font-poppins">Play</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-[49%] py-2 flex justify-center items-center rounded-lg border border-orange-400">
            <Text className="font-poppins text-orange-400">Download</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-white font-poppins text-xs">
          {item?.overview}
        </Text>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;
