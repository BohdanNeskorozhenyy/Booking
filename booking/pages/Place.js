import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import Slick from "react-native-slick";
import { StatusBar } from "expo-status-bar";

export const Place = ({ navigation }) => {
  const [isFavorite, setIsfavorite] = useState(false);
  const NavigateBack = () => {
    navigation.navigate("FindPlace");
  };

  return (
    <Container>
      <StatusBar hidden={true} StatusBarStyle="light" />
      <TopButtonsBox>
        <BackIconWrap onTouchEnd={NavigateBack}>
          <BackIcon source={require("../icons/backIcon.png")} />
        </BackIconWrap>
        <FavoriteIconWrap onTouchEnd={() => setIsfavorite(!isFavorite)}>
          {isFavorite ? (
            <FavoriteIcon source={require("../icons/likeBlue.png")} />
          ) : (
            <FavoriteIcon source={require("../icons/like.png")} />
          )}
        </FavoriteIconWrap>
      </TopButtonsBox>
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
      <Content></Content>
    </Container>
  );
};

const PhotoContainer = styled.View`
  flex: 6;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  z-index: 1;
`;

const Content = styled.View`
  flex: 10;
  height: 100%;
  width: 100%;
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

const TopButtonsBox = styled.View`
  width: 100%;
  flex-direction: row;
  height: 50px;
  position: absolute;
  top: 30px;
  justify-content: space-between;
  z-index: 2;
  padding: 0px 5%;
`;

const BackIconWrap = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  padding-left: 7px;
  justify-content: center;
  background-color: "rgb(255, 255, 255)";
`;

const FavoriteIconWrap = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: "rgb(255, 255, 255)";
`;

const BackIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

const FavoriteIcon = styled.Image`
  width: 25px;
  height: 25px;
`;
