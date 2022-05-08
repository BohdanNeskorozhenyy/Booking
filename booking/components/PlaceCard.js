import styled from "styled-components/native";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { List, DefaultTheme, configureFonts } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const placeData = {
  title: "Dengoff Bar",
  businesType: "Food / drink",
  photo: require("../icons/dengoff.png"),
  description: "We cook pizza, make hookahs, eat alcoholic beverages",
  scedule: {
    monday: "10:00 - 21:00",
    tuesday: "10:00 - 21:00",
    wednesday: "10:00 - 21:00",
    tursday: "10:00 - 21:00",
    friday: "10:00 - 21:00",
    saturday: "10:00 - 21:00",
    sunday: "10:00 - 21:00",
  },
};

export const PlaceCard = ({ data }) => {
  const [isFavorite, setIsfavorite] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { title, businesType, photo, description } = data;
  const { monday, tuesday, wednesday, tursday, friday, saturday, sunday } =
    placeData.scedule;
  return (
    <Container isExpanded={isExpanded}>
      <Box>
        <PlaceImage source={photo} />
        <CardContent>
          <CardLabel>
            <BusinesType>{businesType}</BusinesType>
            {isFavorite ? (
              <FavoriteWrap onTouchEnd={() => setIsfavorite(!isFavorite)}>
                <FavoriteIcon source={require("../icons/likeBlue.png")} />
              </FavoriteWrap>
            ) : (
              <FavoriteWrap onTouchEnd={() => setIsfavorite(!isFavorite)}>
                <FavoriteIcon source={require("../icons/like.png")} />
              </FavoriteWrap>
            )}
          </CardLabel>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </CardContent>
      </Box>
      <ListContainer>
        <OpenStatusBox>
          <OpenStatus>Open</OpenStatus>
          {!isExpanded && <TimeOfClothe>Closes at 21:00</TimeOfClothe>}
        </OpenStatusBox>
        <List.Accordion
          theme={theme}
          expanded={isExpanded}
          onPress={() => setIsExpanded(!isExpanded)}
          left={() => <FavoriteIcon source={require("../icons/clock.png")} />}
        >
          <WorkDayItem style={{ paddingLeft: 30 }}>
            <Day>Monday</Day>
            <Day>{monday}</Day>
          </WorkDayItem>
          <WorkDayItem style={{ paddingLeft: 30 }}>
            <Day>Tuesday</Day>
            <Day>{tuesday}</Day>
          </WorkDayItem>
          <WorkDayItem style={{ paddingLeft: 30 }}>
            <Day>Wednesday</Day>
            <Day>{wednesday}</Day>
          </WorkDayItem>
          <WorkDayItem style={{ paddingLeft: 30 }}>
            <Day>Tursday</Day>
            <Day>{tursday}</Day>
          </WorkDayItem>
          <WorkDayItem style={{ paddingLeft: 30 }}>
            <Day>Friday</Day>
            <Day>{friday}</Day>
          </WorkDayItem>
          <WorkDayItem dayOff={true} style={{ paddingLeft: 30 }}>
            <Day dayOff={true}>Saturday</Day>
            <Day dayOff={true}>{saturday}</Day>
          </WorkDayItem>
          <WorkDayItem dayOff={true} style={{ paddingLeft: 30 }}>
            <Day dayOff={true}>Sunday</Day>
            <Day dayOff={true}>{sunday}</Day>
          </WorkDayItem>
        </List.Accordion>
      </ListContainer>
    </Container>
  );
};

const windowWidth = Dimensions.get("window").width;

const maxHeight = windowWidth > 414 ? "150px" : "100px";

const Box = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 15px 0px 0px 0px;
`;
const Container = styled.View`
  width: 100%;
  padding-bottom: ${(props) => (props.isExpanded ? "370px" : "70px")};
`;
const PlaceImage = styled.Image`
  width: 30%;
  max-height: ${maxHeight};
  border-radius: 5px;
`;

const FavoriteIcon = styled.Image`
  width: 22px;
  height: 22px;
`;

const FavoriteWrap = styled.View`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -20px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const CardContent = styled.View`
  padding-left: 3%;
  width: 100%;
`;

const CardLabel = styled.View`
  flex-direction: row;
  padding-bottom: 5px;
  justify-content: space-between;
  width: 67%;
  align-items: center;
`;

const BusinesType = styled.Text`
  font-size: 16px;
  color: #808080;
`;

const Description = styled.Text`
  padding-top: 5px;
  font-size: 16px;
  width: 80%;
  max-width: 300px;
  color: #5c677d;
`;

const ListContainer = styled.View`
  width: 100%;
  position: absolute;
  top: 100%;
  border-bottom-width: 1;
  border-bottom-color: #47315a;
`;

const OpenStatusBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 18px;
  left: 35px;
`;

const OpenStatus = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #6842ff;
  margin-right: 20px;
`;
const TimeOfClothe = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const WorkDayItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => (props.dayOff ? "#d988cd" : "#e6e6e6")};
  padding: 5px;
  padding-right: 30px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Day = styled.Text`
  color: ${(props) => (props.dayOff ? "white" : "#58707c")};
  font-size: 18px;
`;
