import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import Slick from "react-native-slick";
import { StatusBar } from "expo-status-bar";
import { LocationComponent } from "../components/Location";
import { Header } from "../components/Header";

export const Place = ({ navigation }) => {
  const [isFavorite, setIsfavorite] = useState(false);

  return (
    <Container>
      <StatusBar />
      <Header
        navigation={navigation}
        backRoute={"FindPlace"}
        backRouteText="Find a place"
        style={{ borderBottomWidth: 1 }}
      />
      <PhotoContainer>
        <Slick
          activeDot={<ActiveDot />}
          dot={<Dot />}
          style={styles.wrapper}
          showsButtons={false}
        >
          <View style={styles.slide}>
            <PlaceImage source={require("../images/BeautySalon.png")} />
          </View>
          <View style={styles.slide}>
            <PlaceImage source={require("../images/dengoff.png")} />
          </View>
          <View style={styles.slide}>
            <PlaceImage source={require("../images/forMen.png")} />
          </View>
        </Slick>
      </PhotoContainer>
      <Content>
        <TitleBox onTouchEnd={() => setIsfavorite(!isFavorite)}>
          <NameOfBusiness>Dengoff Bar</NameOfBusiness>
          {isFavorite ? (
            <FavoriteIcon source={require("../icons/likeBlue.png")} />
          ) : (
            <FavoriteIcon source={require("../icons/like.png")} />
          )}
        </TitleBox>
        <LocationComponent location={"Tetiev, Shevchenko Street, 132"} />
        <Description>
          We cook pizza, make hookahs, eat alcoholic beverages, We cook pizza,
          make hookahs, eat alcoholic beverages We cook pizza, make hookahs, eat
          alcoholic beverages, We cook pizza, make hookahs, eat alcoholic
          beverages
        </Description>
      </Content>
    </Container>
  );
};

const PhotoContainer = styled.View`
  flex: 4;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
`;

const Content = styled.View`
  flex: 5;
  height: 100%;
  width: 100%;
  padding: 0 20px;
  padding-top: 20px;
`;

const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;

const PlaceImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

const Dot = styled.View`
  background-color: "rgb(255, 255, 255)";
  width: 10;
  height: 5;
  margin-left: 3;
  margin-right: 3;
  margin-top: 3;
  margin-bottom: 3;
  border-radius: 5px;
`;

const ActiveDot = styled.View`
  background-color: "rgb(255, 255, 255)";
  width: 20;
  height: 5;
  margin-left: 3;
  margin-right: 3;
  margin-top: 3;
  margin-bottom: 3;
  border-radius: 5px;
`;

const FavoriteIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

const NameOfBusiness = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-right: auto;
`;

const TitleBox = styled.View`
  flex-direction: row;
  margin-bottom: 10px;

  align-items: center;
`;

const Description = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  color: #5c677d;
`;
