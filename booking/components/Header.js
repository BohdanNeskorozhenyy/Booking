import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";
import { LocationComponent } from "./Location";

export const Header = ({
  avatar,
  style,
  location,
  backRoute,
  backRouteText,
  navigation,
}) => {
  const NavigateBack = () => {
    navigation.navigate(backRoute);
  };
  return (
    <HeaderContainer style={style}>
      {avatar && <StyledIconAvatar source={require("../images/bogdan.jpg")} />}
      {location && <LocationComponent location={"Tetiev"} />}
      {backRoute && backRouteText && (
        <BackBox onTouchEnd={NavigateBack}>
          <BackIcon source={require("../icons/backArrow.png")} />
          <BackText>{backRouteText}</BackText>
        </BackBox>
      )}
      <StyeledIconMenu source={require("../icons/menu-button.png")} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  flex-direction: row;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 6%;
  padding-top: ${getStatusBarHeight() + "px"};
`;

const StyledIconAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;
const StyeledIconMenu = styled.Image`
  width: 30px;
  height: 30px;
`;

const BackText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const BackBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BackIcon = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
