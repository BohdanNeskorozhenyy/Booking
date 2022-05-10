import styled from "styled-components/native";
import { Animated, Image, TouchableOpacity } from "react-native";
import { useState, useEffect, useRef } from "react";

export const Accordion = ({ children, isExpanded, setExpanded }) => {
  const expandAnim = useRef(new Animated.Value(40)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const [localIsExpadned, setLocalIsExpanded] = useState(false);

  const makeBig = () => {
    Animated.timing(expandAnim, {
      toValue: 350,
      duration: 350,
      useNativeDriver: false,
    }).start();
  };
  const makeSmall = () => {
    Animated.timing(expandAnim, {
      toValue: 40,
      duration: 350,
      useNativeDriver: false,
    }).start();
  };

  const rotateDown = () => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  };

  const rotateUp = () => {
    Animated.timing(rotateAnim, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    isExpanded ? makeBig() : makeSmall();
    isExpanded ? rotateDown() : rotateUp();
  }, [isExpanded]);

  useEffect(() => {
    localIsExpadned ? makeBig() : makeSmall();
    localIsExpadned ? rotateDown() : rotateUp();
  }, [localIsExpadned]);

  return (

      <Animated.View style={[ContainerStyle, { height: expandAnim }]}>
        <TouchableOpacity
          onPress={setExpanded ? setExpanded : setLocalIsExpanded}
        >
          <Header>
            <Animated.Image
              style={[
                ExpandIconStyled,
                {
                  transform: [
                    {
                      rotate: rotateAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "180deg"],
                      }),
                    },
                  ],
                },
              ]}
              source={require("../icons/bownArrow.png")}
            />
          </Header>
        </TouchableOpacity>
        {children}
      </Animated.View>
  );
};





const ContainerStyle = {
  width: "100%",
  overflow: "hidden",
  paddingTop: 16,
  paddingRight: 10,
};

const ExpandIconStyled = {
  width: 20,
  height: 20,
};
const ExpandIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const Header = styled.View`
  height: 40px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;
