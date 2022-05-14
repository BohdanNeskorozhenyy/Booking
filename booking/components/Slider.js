import React from "react";
import styled from "styled-components/native";
import { StyleSheet, View, Dimensions } from "react-native";
import Slick from "react-native-slick";

const windowWidth = Dimensions.get("window").width;

export const Slider = ({photo}) => {
  return (
    <PhotoContainer>
      <Slick
        activeDot={<ActiveDot />}
        dot={<Dot />}
        style={styles.wrapper}
        showsButtons={false}
      >
        {photo.map((image) => {
          return (
            <View style={styles.slide}>
              <PlaceImage source={image} />
            </View>
          );
        })}
      </Slick>
    </PhotoContainer>
  );
};

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
const PhotoContainer = styled.View`
  height: ${windowWidth > 500 ? "500px" : "300px"};
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
`;

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

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

const PlaceImage = styled.Image`
  width: 100%;
  height: 100%;
`;
