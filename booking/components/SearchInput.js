import styled from "styled-components/native";
import React, { useState } from "react";

export const SearchInput = ({ placeholder, value, onChange, clearInput }) => {
  const [border, setBorder] = useState("1.5px #e6e6e6 solid");
  const [background, setBackground] = useState("#F5F5F5");
  const [isFocused, setisFocused] = useState(false);

  const focusHandler = () => {
    setBorder("1.5px #6842FF solid");
    setBackground("#F3F0FF");
    setisFocused(true);
  };

  const blurHandler = () => {
    setBorder("1.5px #e6e6e6 solid");
    setBackground("#F5F5F5");
    setisFocused(false);
  };

  // "../icons/searchBlue.png"
  return (
    <InputBox>
      <StyledInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        onFocus={focusHandler}
        onBlur={blurHandler}
        border={border}
        background={background}
        placeholderTextColor="#8d99ae"
      />
      {isFocused ? (
        <StyledIconSearch source={require("../icons/searchBlue.png")} />
      ) : (
        <StyledIconSearch source={require("../icons/search.png")} />
      )}
      {clearInput && value ? (
        isFocused ? (
          <StyledIconClear
            onTouchEnd={clearInput}
            source={require("../icons/cancelBlue.png")}
          />
        ) : (
          <StyledIconClear
            onTouchEnd={clearInput}
            source={require("../icons/cancel.png")}
          />
        )
      ) : null}
    </InputBox>
  );
};

const StyledInput = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 0px 15px 0px 50px;
  border: ${(props) => props.border};
  background: ${(props) => props.background};
  margin: 15px 0 10px 0;
  border-radius: 10px;
  font-size: 18px;
  color: black;
`;
const StyledIconSearch = styled.Image`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 37%;
  left: 4%;
`;

const StyledIconClear = styled.Image`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 37%;
  right: 5%;
`;

const InputBox = styled.View`
  width: 100%;
`;
