import {
  enGB,
  registerTranslation,
  DatePickerModal,
} from "react-native-paper-dates";
import styled from "styled-components/native";
import { Text, View } from "react-native";

registerTranslation("en-GB", enGB);

export const DateTimePicker = ({ visible, date, onConfirm }) => {
  return (
    <View>
      <Title>Select a visit time</Title>
      <DatePickerModal
        locale="en-GB"
        mode="single"
        visible={visible}
        date={date}
        onConfirm={onConfirm}
      />
    </View>
  );
};

const Title = styled.Text`
   font-size: 16px;
   font-weight: 700;
`;
