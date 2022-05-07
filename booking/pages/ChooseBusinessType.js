import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

export const ChooseBusinessType = ({ navigation }) => {
  return (
    <Container>
      <Text>Choose Business Type</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
