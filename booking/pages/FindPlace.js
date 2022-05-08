import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Header } from "../components/Header";
import { SearchInput } from "../components/SearchInput";
import { Tags } from "../components/Tags";
import { PlaceCard } from "../components/PlaceCard";
import { ScrollView } from "react-native";

const placeTypes = [
  { text: "food / drink", value: "food" },
  { text: "work", value: "work" },
  { text: "beauty", value: "beauty" },
  { text: "all", value: "all" },
];

const places = [
  {
    id: 1,
    title: "Dengoff Bar",
    businesType: "Food / drink",
    photo: require("../icons/dengoff.png"),
    description: "We cook pizza, make hookahs, eat alcoholic beverages, We cook pizza, make hookahs, eat alcoholic beverages",
    scedule: {
      monday: { workTime: "10:00 - 21:00", dayOff: false },
      tuesday: { workTime: "10:00 - 21:00", dayOff: false },
      wednesday: { workTime: "10:00 - 21:00", dayOff: false },
      tursday: { workTime: "10:00 - 21:00", dayOff: false },
      friday: { workTime: "10:00 - 21:00", dayOff: false },
      saturday: { workTime: "10:00 - 21:00", dayOff: true },
      sunday: { workTime: "10:00 - 21:00", dayOff: true },
    },
  },
  {
    id: 2,
    title: "4men",
    businesType: "Services",
    photo: require("../icons/forMen.png"),
    description: "Men's barber shop",
    scedule: {
      monday: { workTime: "10:00 - 18:00", dayOff: false },
      tuesday: { workTime: "10:00 - 18:00", dayOff: false },
      wednesday: { workTime: "10:00 - 18:00", dayOff: false },
      tursday: { workTime: "10:00 - 18:00", dayOff: true },
      friday: { workTime: "10:00 - 18:00", dayOff: false },
      saturday: { workTime: "10:00 - 18:00", dayOff: true },
      sunday: { workTime: "10:00 - 18:00", dayOff: true },
    },
  },
  {
    id: 3,
    title: "4men",
    businesType: "Services",
    photo: require("../icons/forMen.png"),
    description: "Men's barber shop",
    scedule: {
      monday: { workTime: "10:00 - 18:00", dayOff: false },
      tuesday: { workTime: "10:00 - 18:00", dayOff: false },
      wednesday: { workTime: "10:00 - 18:00", dayOff: false },
      tursday: { workTime: "10:00 - 18:00", dayOff: true },
      friday: { workTime: "10:00 - 18:00", dayOff: false },
      saturday: { workTime: "10:00 - 18:00", dayOff: true },
      sunday: { workTime: "10:00 - 18:00", dayOff: true },
    },
  },
  {
    id: 4,
    title: "4men",
    businesType: "Services",
    photo: require("../icons/forMen.png"),
    description: "Men's barber shop",
    scedule: {
      monday: { workTime: "10:00 - 18:00", dayOff: false },
      tuesday: { workTime: "10:00 - 18:00", dayOff: false },
      wednesday: { workTime: "10:00 - 18:00", dayOff: false },
      tursday: { workTime: "10:00 - 18:00", dayOff: true },
      friday: { workTime: "10:00 - 18:00", dayOff: false },
      saturday: { workTime: "10:00 - 18:00", dayOff: true },
      sunday: { workTime: "10:00 - 18:00", dayOff: true },
    },
  },
];

export const FindPlace = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");
  const [placeType, setPlaceType] = useState("");
  const [headerBorder, setHeaderBorder] = useState(0);

  const changeHandler = (e) => {
    setSearchValue(e);
    console.log(placeType);
  };

  const scrollHandler = (e) => {
    const scrollHeight = e.nativeEvent.contentOffset.y;
    console.log(scrollHeight);
    if (scrollHeight > 5) {
      setHeaderBorder(1);
    } else {
      setHeaderBorder(0);
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
      <Header style={{ borderBottomWidth: headerBorder }} />
      <Content>
        <ScrollView
          onScroll={scrollHandler}
          showsVerticalScrollIndicator={false}
          style={{ marginVertical: 3 }}
        >
          <Title>Find a place</Title>
          <SearchInput
            onChange={(e) => changeHandler(e)}
            value={searchValue}
            placeholder="Search place"
            clearInput={() => changeHandler("")}
          />
          <Tags onChange={setPlaceType} options={placeTypes} />
          {places.map((place) => (
            <PlaceCard key={place.id} data={place} />
          ))}
        </ScrollView>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const Content = styled.View`
  flex: 10;
  width: 100%;
  padding: 0 6%;
  justify-content: flex-start;
  overflow: scroll;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-top: 10px;
  font-weight: bold;
`;
