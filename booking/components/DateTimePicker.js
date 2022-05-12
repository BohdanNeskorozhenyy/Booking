import {
  enGB,
  registerTranslation,
  DatePickerModal,
  TimePickerModal,
} from "react-native-paper-dates";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { timeParser } from "../helpers/timeParser";

registerTranslation("en-GB", enGB);

export const DateTimePicker = ({
  dateVisible,
  date,
  onDateConfirm,
  onDatePress,
  onDateDismiss,

  onTimePress,
  time,
  timeVisible,
  onTimeDismiss,
  onTimeConfirm,
}) => {
  const shortDate = date.toLocaleString().slice(0, 10);

  const parsedTime = timeParser(time);

  return (
    <Container>
      <Title>Select a visit time</Title>
      <DatePickerModal
        locale="en-GB"
        mode="single"
        visible={dateVisible}
        date={date}
        onConfirm={onDateConfirm}
        onDismiss={onDateDismiss}
      />
      <TimePickerModal
        onConfirm={onTimeConfirm}
        onDismiss={onTimeDismiss}
        visible={timeVisible}
      />
      <TouchableOpacity onPress={onDatePress}>
        <DateWrap>
          <Date>{shortDate}</Date>
          <Icon source={require("../icons/calendar.png")} />
        </DateWrap>
      </TouchableOpacity>
      <TouchableOpacity onPress={onTimePress}>
        <DateWrap>
          <Date>{`${parsedTime.hours}:${parsedTime.minutes}`}</Date>
          <Icon source={require("../icons/calendar.png")} />
        </DateWrap>
      </TouchableOpacity>
    </Container>
  );
};

const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Container = styled.View`
  width: 100%;
  padding-top: 20px;
`;

const DateWrap = styled.View`
  padding: 0 10px;
  flex-direction: row;
  width: 100%;
  height: 35px;
  border: 1px #6c757d solid;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
  align-self: center;
  justify-content: center;
`;

const Date = styled.Text`
  font-size: 16px;
`;
