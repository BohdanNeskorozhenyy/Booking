import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";
import { LocationComponent } from "./Location";
import { LinearGradient } from "expo-linear-gradient";

export const Header = ({style}) => {
  return (
    <HeaderContainer style={style}>
      <StyledIconAvatar source={require("../icons/bogdan.jpg")} />
      <LocationComponent />
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

