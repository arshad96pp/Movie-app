import {
  View,
  Text,
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useState } from "react";
import instance from "../services/baseUrl";
import { imageBaseUrl, request } from "../services/request";
import { useNavigation } from "@react-navigation/native";

const SearchCard = ({ searchInput, setSearchInput }) => {
  const navigate = useNavigation();

  const [movieData, setMovieData] = useState([]);
  const [searchGetDataArray, setSearchDataGetArray] = useState(null);

  useEffect(() => {
    const searchItem = movieData.filter((item) =>
      item?.original_title
        ?.toLowerCase()
        .replace(/\s/g, "")
        ?.includes(searchInput.toLowerCase()?.replace(/\s/g, ""))
    );
    setSearchDataGetArray(searchItem);
  }, [searchInput]);

  const fetchMovieData = async () => {
    await Promise.all([
      instance.get(request.fetchActionMovies),
      instance.get(request.fetchComedyMovies),
      instance.get(request.fetchDocumentaries),
      instance.get(request.fetchHorrorMovies),
      instance.get(request.fetchNetflixOriginals),
      instance.get(request.fetchRomanceMovies),
      // instance.get(request.fetchTopRated),
      // instance.get(request.fetchTrending),
    ]).then((res) => {
      const ActionMovies = res[0].data.results;
      const comedyMovies = res[1].data.results;
      const documnetMovies = res[2].data.results;
      const horrorMovies = res[3].data.results;
      const netFlixOriginal = res[4].data.results;
      const romaticMovies = res[5].data.results;
      setMovieData([
        ...movieData,
        ...ActionMovies,
        ...comedyMovies,
        ...documnetMovies,
        ...horrorMovies,
        ...netFlixOriginal,
        ...romaticMovies,
      ]);

      // this for app mounting time get all data
      setSearchDataGetArray([
        ...movieData,
        ...ActionMovies,
        ...comedyMovies,
        ...documnetMovies,
        ...horrorMovies,
        ...netFlixOriginal,
        ...romaticMovies,
      ]);
    });
  };
  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <View className="flex flex-row justify-center">
      <FlatList
        numColumns={2}
        // key={(item) => item.id}
        className="flex "
        data={searchGetDataArray}
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
  );
};

export default SearchCard;
