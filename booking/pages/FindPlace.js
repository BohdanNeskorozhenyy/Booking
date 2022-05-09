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
    businesSubType: "Food / drink",
    businesType: 'rent',
    photo: require("../images/dengoff.png"),
    description:
      "We cook pizza, make hookahs, eat alcoholic beverages, We cook pizza, make hookahs, eat alcoholic beverages",
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
    businesSubType: "Services",
    businesType: 'service',
    photo: require("../images/forMen.png"),
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
    title: "The Space",
    businesSubType: "Work",
    businesType: 'rent',
    photo: require("../images/space.png"),
    description: "Space for work, meetings, conferences",
    scedule: {
      monday: { workTime: "10:00 - 20:00", dayOff: false },
      tuesday: { workTime: "10:00 - 20:00", dayOff: false },
      wednesday: { workTime: "10:00 - 20:00", dayOff: false },
      tursday: { workTime: "10:00 - 20:00", dayOff: false },
      friday: { workTime: "10:00 - 20:00", dayOff: false },
      saturday: { workTime: "10:00 - 18:00", dayOff: true },
      sunday: { workTime: "10:00 - 18:00", dayOff: true },
    },
  },
  {
    id: 4,
    title: "L`evidence Beaute",
    businesSubType: "Beaute",
    businesType: 'service',
    photo: require("../images/BeautySalon.png"),
    description: "The only premium beauty salon in Kyiv with a history of over 20 years",
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
  const [expandedCadr, setExpandedCadr] = useState(0);

  const changeHandler = (e) => {
    setSearchValue(e);
    console.log(placeType);
  };

  const scrollHandler = (e) => {
    const scrollHeight = e.nativeEvent.contentOffset.y;
    if (scrollHeight > 2) {
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
            <PlaceCard
              expandedCadr={expandedCadr}
              setExpanded={setExpandedCadr}
              key={place.id}
              data={place}
              navigation={navigation}
            />
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
