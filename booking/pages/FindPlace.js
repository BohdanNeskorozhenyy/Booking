import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Header } from "../components/Header";
import { SearchInput } from "../components/SearchInput";
import { Tags } from "../components/Tags";

const placeTypes = [
  { text: "food / drink", value: "food" },
  { text: "work", value: "work" },
  { text: "beauty", value: "beauty" },
  { text: "all", value: "all" },
];

export const FindPlace = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");
  const [placeType, setPlaceType] = useState("");

  const changeHandler = (e) => {
    setSearchValue(e);
    console.log(placeType);
  };

  return (
    <Container>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
      <Header />
      <Content>
        <Title>Find a place</Title>
        <SearchInput
          onChange={(e) => changeHandler(e)}
          value={searchValue}
          placeholder="Search place"
          clearInput={() => changeHandler("")}
        />
        <Tags onChange={setPlaceType} options={placeTypes} />
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
`;

const Title = styled.Text`
  font-size: 30px;
  margin-top: 10px;
  font-weight: bold;
`;
