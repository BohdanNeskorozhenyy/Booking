import styled from "styled-components/native";

export const LocationComponent = ({ location }) => {
  return (
    <LocationBox>
      <LocationIcon source={require("../icons/location.png")} />
      <LocationText>{location}</LocationText>
    </LocationBox>
  );
};

const LocationBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LocationText = styled.Text`
  font-size: 18px;
`;

const LocationIcon = styled.Image`
  width: 22px;
  height: 22px;
`;
