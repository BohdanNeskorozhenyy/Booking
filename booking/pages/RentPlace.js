import React, { useState, useCallback } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import Slick from "react-native-slick";
import { StatusBar } from "expo-status-bar";
import { LocationComponent } from "../components/Location";
import { Header } from "../components/Header";
import { DateTimePicker } from "../components/DateTimePicker";
import { Scedule } from "../components/Scedule";
import { ScrollView } from "react-native";
import { places } from "../mockData";
const windowWidth = Dimensions.get("window").width;

export const RentPlace = ({ navigation }) => {
  const [isFavorite, setIsfavorite] = useState(false);
  const [isSceduleOpen, setisSceduleOpen] = useState(false);

  const { scedule } = places[0];
  const [date, setDate] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);

  const theDay = date.getDay();

  const [time, setTime] = useState({ hours: 10, minutes: 0 });
  const [timeOpen, setTimeOpen] = useState(false);

  const onDateConfirm = useCallback(
    (params) => {
      setDateOpen(false);
      setDate(params.date);
    },
    [setDateOpen, setDate]
  );

  const onDateDismiss = useCallback(() => {
    setDateOpen(false);
  }, [setDateOpen]);

  const onTimeDismiss = useCallback(() => {
    setTimeOpen(false);
  }, [setTimeOpen]);

  const onTimeConfirm = useCallback(
    ({ hours, minutes }) => {
      setTimeOpen(false);
      setTime({ hours, minutes });
    },
    [setTimeOpen]
  );

  return (
    <Container>
      <StatusBar />
      <Header
        navigation={navigation}
        backRoute={"FindPlace"}
        backRouteText="Find a place"
        style={{ borderBottomWidth: 1 }}
      />
      <Content>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}
          style={{ flex: 9 }}
        >
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
          <ContentWraper>
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
              We cook pizza, make hookahs, eat alcoholic beverages, We cook
              pizza, make hookahs, eat alcoholic beverages We cook pizza, make
              hookahs, eat alcoholic beverages, We cook pizza, make hookahs, eat
              alcoholic beverages
            </Description>
            <Scedule
              setExpanded={() => setisSceduleOpen(!isSceduleOpen)}
              isExpanded={isSceduleOpen}
              scedule={scedule}
            />
            <DateTimePicker
              onDatePress={() => setDateOpen(true)}
              dateVisible={dateOpen}
              date={date}
              onDateConfirm={onDateConfirm}
              onDateDismiss={onDateDismiss}
              onTimePress={() => setTimeOpen(true)}
              time={time}
              timeVisible={timeOpen}
              onTimeDismiss={onTimeDismiss}
              onTimeConfirm={onTimeConfirm}
            />
          </ContentWraper>
          <Footer></Footer>
        </ScrollView>
      </Content>
    </Container>
  );
};
const Content = styled.View`
  flex: 9;
  width: 100%;
`;

const PhotoContainer = styled.View`
  height: ${windowWidth > 500 ? "500px" : "300px"};
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
`;
const ContentWraper = styled.View`
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

const Footer = styled.View`
  margin-top: 20px;
  width: 100%;
  height: 100px;
  align-items: center;
`;
