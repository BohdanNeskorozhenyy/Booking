import styled from "styled-components/native";
import React, { useState } from "react";

export const Tags = ({ options, onChange }) => {
  const [activeOption, setActiveOption] = useState("");

  const changeHandler = (value) => {
    setActiveOption(value);
    onChange(value);
  };

  return (
    <Container>
      {options.map(({ text, value }) => (
        <Tag
          changeHandler={changeHandler}
          text={text}
          value={value}
          activeOption={activeOption}
          key={value}
        />
      ))}
    </Container>
  );
};

const Tag = ({ text, value, activeOption, changeHandler }) => {
  const isActive = activeOption === value;
  return (
    <StyledTag
      onTouchEnd={() => changeHandler(value)}
      isActive={isActive}
      value={value}
    >
      <Text isActive={isActive} key={value}>
        {text}
      </Text>
    </StyledTag>
  );
};

const StyledTag = styled.View`
  padding: 7px;
  min-width: 50px;
  border: 1.5px solid #6842ff;
  border-radius: 20px;
  margin: 4px;
  background-color: ${(props) => (props.isActive ? "#6842FF" : "transparent")};
`;
const Text = styled.Text`
  font-size: 14px;
  text-align: center;
  color: ${(props) => (props.isActive ? "white" : "#6842FF")};
  font-weight: bold;
`;
const Container = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;
