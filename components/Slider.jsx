import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import instance from "../services/baseUrl";
import { request, imageBaseUrl } from "../services/request";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const [imageData, setImageData] = useState([]);
  const [imageNumber, setImageNumber] = useState(8);

  const fetchHeroData = async () => {
    const itemData = await instance.get(request.fetchTopRated);
    console.log(itemData.data.results);

    setImageData(itemData.data.results[imageNumber]);
  };

  console.log(imageNumber);
  useEffect(() => {
    fetchHeroData();
  }, []);
  return (
    <ImageBackground
      className="flex-1 relative"
      source={{ uri: `${imageBaseUrl}${imageData?.backdrop_path}` }}
    >
      <View className="absolute w-[100%] top-[65%] px-2">
        <Text className="text-white font-poppins">
          {imageData?.original_title || imageData?.title}
        </Text>
        <Text className="text-white font-poppins text-xs mb-2">
          {imageData?.release_date}
        </Text>
        <View className="flex flex-row gap-2">
          <TouchableOpacity className="bg-yellow-300 p-2 w-[25%] flex justify-center items-center rounded-xl">
            <Text className="text-white font-poppins">Play</Text>
          </TouchableOpacity>

          <TouchableOpacity className="border border-yellow-300 p-2 w-[25%] flex justify-center items-center rounded-xl">
            <Text className="text-yellow-400 font-poppins">To List</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Slider;
