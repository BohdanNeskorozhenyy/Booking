import styled from "styled-components/native";
import { VisualPicker } from "../components/VisualPicker";
import { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";


const options = [
  {
    text: "Business",
    value: "business",
    icon: require("../icons/businessman.png"),
  },
  {
    text: "Customer",
    value: "customer",
    icon: require("../icons/user.png"),
  },
];

export const ChooseAccountType = ({ navigation }) => {
  const [accountType, setAccountType] = useState("business");
  const [hint, setHint] = useState(businessHint);
  const [nextPage, setNextPage] = useState("");

  const businessHint =
    "Choose if you are the owner or administrator of a business (Restaurant, Beauty Salon, Coworking)";
  const customerHint =
    "Choose if you are a customer and want to book some services or a place";

  const changeHandler = (value) => {
    setAccountType(value);
  };

  const submitHandler = () => {
    navigation.navigate(nextPage);
  };

  useEffect(() => {
    switch (accountType) {
      case "business":
        setHint(businessHint);
        setNextPage("ChooseBusinessType");
        break;
      case "customer":
        setHint(customerHint);
        setNextPage("FindPlace");
        break;
      default:
        setHint("");
        break;
    }
  }, [accountType]);

  return (
    <LinearGradient
      style={{ flex: 1, width: "100%" }}
      colors={["#6842FF", "#FFE9FF"]}
    >
      <StatusBar />
      <TitleBox>
        <Title>Choose account type</Title>
        <Hint>{hint}</Hint>
      </TitleBox>
      <ContentBox>
        <VisualPicker onChange={changeHandler} options={options} />
        <ButtonBox>
          <Button onTouchEnd={submitHandler}>
            <ButtonText>Continue</ButtonText>
          </Button>
        </ButtonBox>
      </ContentBox>
    </LinearGradient>
  );
};
const windowWidth = Dimensions.get("window").width;

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const ContentBox = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10%;
`;
const TitleBox = styled.View`
  padding-top: 20%;
  flex: 1;
  align-items: center;
`;
const Hint = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  margin-top: 50px;
  padding: 0 5px;
`;
const Title = styled.Text`
  font-size: ${windowWidth < 414 ? "35px" : "37px"};
  font-weight: 600;
  text-align: center;
  color: #ffffff;
`;
const Button = styled.View`
  flex: 1;
  height: 50px;
  background-color: #6842FF;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin: 0px 7px;
`;
const ButtonText = styled.Text`
  font-size: 18px;
  color: #ffffff;
  text-align: center;
`;

const ButtonBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 90%;
`;
