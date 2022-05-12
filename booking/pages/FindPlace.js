import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Header } from "../components/Header";
import { SearchInput } from "../components/SearchInput";
import { Tags } from "../components/Tags";
import { PlaceCard } from "../components/PlaceCard";
import { ScrollView } from "react-native";
import { places } from "../mockData";

const placeTypes = [
  { text: "food / drink", value: "food" },
  { text: "work", value: "work" },
  { text: "beauty", value: "beauty" },
  { text: "all", value: "all" },
];

export const FindPlace = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");
  const [placeType, setPlaceType] = useState("");
  const [expandedCadr, setExpandedCadr] = useState(0);

  const changeHandler = (e) => {
    setSearchValue(e);
    console.log(placeType);
  };

  return (
    <Container>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
      <Header
        avatar
        navigation={navigation}
        location
        style={{ borderBottomWidth: 1 }}
      />
      <ScrollViewContainer>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}
        >
          <Content>
            <Title>Find a place</Title>
            <SearchInput
              onChange={(e) => changeHandler(e)}
              value={searchValue}
              placeholder="Search place"
              clearInput={() => changeHandler("")}
            />
            <Tags
              onChange={setPlaceType}
              options={placeTypes}
              defaultValue={"all"}
            />
            {places.map((place) => (
              <PlaceCard
                expandedCadr={expandedCadr}
                setExpanded={setExpandedCadr}
                key={place.id}
                data={place}
                navigation={navigation}
              />
            ))}
          </Content>
          <Footer></Footer>
        </ScrollView>
      </ScrollViewContainer>
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

const ScrollViewContainer = styled.View`
  flex: 9;
  width: 100%;
`;

const Content = styled.View`
  padding: 0 6%;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-top: 10px;
  font-weight: bold;
`;

const Footer = styled.View`
  margin-top: 20px;
  width: 100%;
  height: 100px;
  align-items: center;
`;
