import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const SigninOtpScreen = () => {
  const navigate = useNavigation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [mobileNumber, setMobileNumber] = useState(null);

  const { params } = useRoute();
  const { number } = params;

  const getMobileNumber = (numberValue) => {
    const firstNumber = numberValue.slice(0, 2);
    const lastNumber = numberValue.slice(-1);

    const allNumber = `+91 ${firstNumber}**** ***${lastNumber}`;

    return allNumber;
  };

  useEffect(() => {
    const getData = getMobileNumber(number);
    setMobileNumber(getData);
  }, []);

  const inputFocusRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const handelTextChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < otp.length - 1 && value !== "") {
      inputFocusRef[index + 1].current.focus();
    }
  };

  return (
    <View className="flex-1 bg-[#191919] flex">
      <View className="h-[20%] justify-center items-center">
        <Text className="font-poppins text-[#F6C90E] text-2xl">FilmMix</Text>
      </View>
      <View className="h-[80%] flex justify-center items-center">
        <View className="w-[100%] flex justify-start items-center">
          <Text className="font-poppins text-white mb-1 text-lg">
            Enter Code
          </Text>
          <Text className="text-white text-xs mb-2">
            code send to {mobileNumber}
          </Text>
          <View className="w-[90%] p-3 flex flex-row justify-around items-center   ">
            {otp.map((item, index) => (
              <TextInput
                ref={inputFocusRef[index]}
                className="border border-blue-50 text-white h-12 w-12 rounded-lg flex justify-cente items-center text-center"
                key={index}
                maxLength={1}
                keyboardType="numeric"
                value={item}
                onChangeText={(value) => handelTextChange(value, index)}
              />
            ))}
          </View>
          <TouchableOpacity
            onPress={() => navigate.navigate("catogory")}
            className="w-[90%] p-3 bg-yellow-400  rounded-2xl flex-row justify-center items-center mt-3"
          >
            <Text className="font-poppins text-white">Get a code</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="h-[10%]"></View>
    </View>
  );
};

export default SigninOtpScreen;
