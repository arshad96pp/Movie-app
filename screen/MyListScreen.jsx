import { View, Text, FlatList, TouchableHighlight, ImageBackground } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { imageBaseUrl } from "../services/request";

const MyListScreen = () => {
  const { savedMovies } = useSelector((item) => item.nav);

  console.log(savedMovies);
  return (
    <View className="flex-1 bg-[#191919] ">

      {savedMovies?.length===0?(
        <View className='flex-1 justify-center items-center'>
                   <Text className=' font-poppins text-[#F6C90E]'>You'r List is Empty</Text>

        </View>
      ):(
        <View className="flex flex-row justify-center p-2">
        <FlatList
         numColumns={2}
         // key={(item) => item.id}
         className="flex "
         data={savedMovies}
         keyExtractor={(item, index) => index}
         contentContainerStyle={{}}
         renderItem={({ item }) => (
           <TouchableHighlight
             className="bg-gray-700 mr-2 w-[48%] rounded-md h-48 overflow-hidden mb-3"
             key={item.id}
             onPress={() => navigate.navigate("details", { item })}
           >
             <ImageBackground
               className="flex-1 "
               source={{ uri: `${imageBaseUrl}${item?.poster_path}` }}
             ></ImageBackground>
           </TouchableHighlight>
         )}
       />
       </View>
      )}
    
     
    </View>
  );
};

export default MyListScreen;
