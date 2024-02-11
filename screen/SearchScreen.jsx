import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchCard from "../components/SearchCard";

const SearchScreen = () => {
  const [searchValue,setSerchValue]=useState('')
  return (
    <View className="bg-[#191919] flex-1 ">
      <View className="h-[13%]  flex justify-center">
        <View className="flex flex-row justify-between items-center h-12 px-3 ">
          <View className="flex flex-row border border-[#EFECEC] w-[80%] h-full p-1 justify-start items-center rounded-lg">
            <View className="w-[20%] flex justify-center items-center">
              <Ionicons name="search" size={27} color={"white"} />
            </View>
            <TextInput
              className="w-[80%] h-full text-white"
              placeholder="Search"
              placeholderTextColor={"#EFECEC"}
              onChangeText={(text)=>setSerchValue(text)}
            />
          </View>
          <View className="h-full flex justify-center items-center bg-orange-300 w-[15%] rounded-lg">
            <Text className='font-poppins'>H</Text>
          </View>
        </View>
      </View>
      <View className="flex-1 px-3">
         <SearchCard searchInput={searchValue} setSearchInput={setSerchValue}/>

      </View>
    </View>
  );
};

export default SearchScreen;
