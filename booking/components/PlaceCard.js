import styled from "styled-components/native";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { List, DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const windowWidth = Dimensions.get("window").width;

export const PlaceCard = ({ data, expandedCadr, setExpanded, navigation }) => {
  const [isFavorite, setIsfavorite] = useState(false);
  const { title, businesSubType, photo, description } = data;
  const [toPlace, setToPlace] = useState('FindPlace');

  const { monday, tuesday, wednesday, tursday, friday, saturday, sunday } =
    data.scedule;
  const isExpanded = expandedCadr === data.id;

  const NavigateToplace = () => {
    navigation.navigate('Place');
  };
  


  return (
    <Container isExpanded={isExpanded}>
      <Box>
        <PlaceImage onTouchEnd={NavigateToplace} source={photo} />
        <CardContent>
          <CardLabel>
            <BusinesType>{businesSubType}</BusinesType>
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
          <Description numberOfLines={windowWidth > 414 ? 4 : 2}>
            {description}
          </Description>
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
          onPress={() => setExpanded(isExpanded ? 0 : data.id)}
          left={() => <FavoriteIcon source={require("../icons/clock.png")} />}
        >
          <WorkDayItem style={{ paddingLeft: 30 }}>
            <Day>Monday</Day>
            <Day>{monday.workTime}</Day>
          </WorkDayItem>
          <WorkDayItem style={{ paddingLeft: 30 }}>
            <Day>Tuesday</Day>
            <Day>{tuesday.workTime}</Day>
          </WorkDayItem>
          <WorkDayItem style={{ paddingLeft: 30 }}>
            <Day>Wednesday</Day>
            <Day>{wednesday.workTime}</Day>
          </WorkDayItem>
          <WorkDayItem style={{ paddingLeft: 30 }}>
            <Day>Tursday</Day>
            <Day>{tursday.workTime}</Day>
          </WorkDayItem>
          <WorkDayItem style={{ paddingLeft: 30 }}>
            <Day>Friday</Day>
            <Day>{friday.workTime}</Day>
          </WorkDayItem>
          <WorkDayItem
            dayOff={saturday.dayOff || true}
            style={{ paddingLeft: 30 }}
          >
            <Day dayOff={saturday.dayOff}>Saturday</Day>
            <Day dayOff={saturday.dayOff}>{saturday.workTime}</Day>
          </WorkDayItem>
          <WorkDayItem dayOff={sunday.dayOff} style={{ paddingLeft: 30 }}>
            <Day dayOff={sunday.dayOff}>Sunday</Day>
            <Day dayOff={sunday.dayOff}>{sunday.workTime}</Day>
          </WorkDayItem>
        </List.Accordion>
      </ListContainer>
    </Container>
  );
};

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
  width: 70%;
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
