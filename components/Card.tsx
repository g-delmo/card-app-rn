import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";

interface CardProps {
  lastFour: number;
  type: string;
  availableBalance: string;
  backgroundImage: any;
}

const CardBackground = styled.ImageBackground`
  width: 212px;
  height: 156px;
  margin-left: 20px;
  padding: 25px 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
`;

const CardInner = styled.View`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  flex: 1;
  justify-content: space-between;
`;

const CardTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const CardDigitsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CardDigits = styled.Text`
  margin-left: 5px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  opacity: 0.8;
`;

const CardBalance = styled.Text`
  color: white;
  font-weight: 800;
  font-size: 22px;
  margin-bottom: 2px;
`;

const CardBalanceSubheader = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: bold;
  font-size: 14px;
`;

const Card = (props: CardProps) => {
  return (
    <CardBackground
      source={props.backgroundImage}
      imageStyle={{ borderRadius: 25 }}
    >
      <CardInner>
        <CardTop>
          <CardDigitsWrapper>
            <Image source={require("../assets/card-dots.png")} />
            <CardDigits>{props.lastFour}</CardDigits>
          </CardDigitsWrapper>
          {props.type === "visa" ? (
            <Image source={require("../assets/visa-icon.png")} />
          ) : (
            <View />
          )}
        </CardTop>
        <View>
          <CardBalance>{props.availableBalance}</CardBalance>
          <CardBalanceSubheader>Available Balance</CardBalanceSubheader>
        </View>
      </CardInner>
    </CardBackground>
  );
};

export default Card;
