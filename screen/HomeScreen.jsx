import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

import Slider from "../components/Slider";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { request } from "../services/request";

const HomeScreen = () => {

  return (
    <ScrollView className="flex-1 bg-[#191919]">
      <View className="flex-1 h-80 ">
        <Slider />
      </View>
      <View className="flex-1 p-2 ">
        <MovieCard
          title={"Top Action Movies"}
          requestMovie={request.fetchActionMovies}
        />
        <MovieCard
          title={"Horror Movies"}
          requestMovie={request.fetchHorrorMovies}
        />
        <MovieCard
          title={"Romance Movies"}
          requestMovie={request.fetchRomanceMovies}
        />
        <MovieCard
          title={"Top Comedy Movies"}
          requestMovie={request.fetchComedyMovies}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
