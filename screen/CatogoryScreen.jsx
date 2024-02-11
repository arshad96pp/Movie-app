import { View, Text, Alert, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { catogory } from "../services/data";
import { useNavigation } from "@react-navigation/native";

const CatogoryScreen = () => {
  const [select, setSelect] = useState([]);
  const naviagte = useNavigation();

  const handleSelected = (value) => {
    setSelect((priv) => {
      if (priv.includes(value)) {
        return priv.filter((item) => item !== value);
      } else {
        return [...priv, value];
      }
    });
  };

  console.log(select);
  return (
    <View className="flex-1 bg-[#191919] flex justify-between px-3">
      <View className="h-[8%]"></View>
      <View className="flex-1">
        <Text className="text-white font-poppins text-xl">
          Select your favorite genre
        </Text>
        <Text className="text-white font-poppins mt-2 mb-5 text-xs">
          You can choose only 10 verients
        </Text>
        <View className="flex-1 flex-row flex-wrap gap-3">
          {catogory.map((item) => (
            <View
              onStartShouldSetResponder={() => handleSelected(item.id)}
              key={item.id}
              className={`border border-white mb-2  p-2 rounded-lg flex justify-center items-center ${
                select?.includes(item?.id) ? "bg-[#F6C90E] " : ""
              }`}
            >
              <Text className="text-white">{item.name}</Text>
            </View>
          ))}
        </View>
      </View>
      <View className="h-[15%] flex justify-center items-center">
        <TouchableOpacity
          onPress={() => naviagte.navigate("bottomTab")}
          className="w-[100%] p-3 bg-yellow-400  rounded-2xl flex-row justify-center items-center mt-3"
        >
          <Text className="font-poppins text-white">Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CatogoryScreen;
