import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SigninScreen = () => {
  const [number,setNumber]=useState('')
  const navigate=useNavigation()
  const handelSubmit = () => {
      if(!number.trim()==''){
        navigate.navigate('loginOtp',{number})
      }
  };
  return (
    <View className="flex-1 bg-[#191919] flex">
      <View className="h-[20%] justify-center items-center">
        <Text className="font-poppins text-[#F6C90E] text-2xl">FilmMix</Text>
      </View>
      <View className="h-[80%] flex justify-center items-center">
        <View className="w-[100%] flex justify-start items-center">
          <Text className="font-poppins text-white mb-3 text-lg">Signin</Text>
          <View className="w-[90%] p-3 flex flex-row items-center border rounded-2xl  border-blue-50">
            <Text className="text-white mr-6">+91</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={(text) => setNumber(text)}
              className="w-48 text-white"
              placeholder="Your Number"
              placeholderTextColor={"#EEEEEE"}
            />
          </View>

          <TouchableOpacity onPress={()=>handelSubmit()} className="w-[90%] p-3 bg-yellow-400  rounded-2xl flex-row justify-center items-center mt-3">
            <Text className="font-poppins text-white">Get a code</Text>
          </TouchableOpacity>
          <Text className="font-poppins text-[#B4B4B8] text-center text-xs w-[90%] mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam aut
            maiores itaque accusamus odio
          </Text>
        </View>
      </View>
      <View className="h-[10%]"></View>
    </View>
  );
};

export default SigninScreen;
