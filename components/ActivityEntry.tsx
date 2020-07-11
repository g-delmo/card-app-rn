import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const ContainerView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const ActivityIcon = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

const DetailsView = styled.View`
  margin-right: auto;
`;

const ActivityName = styled.Text`
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: #464b53;
`;

const ActivityDate = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #464b53;
  opacity: 0.6;
`;

const PriceView = styled.View`
  align-items: flex-end;
`;

const ActivityPrice = styled.Text`
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
`;

const ActivityCard = styled.Text`
  opacity: 0.6;
  font-weight: bold;
  font-size: 14px;
  text-align: right;
  color: #464b53;
`;

interface ActivityProps {
  image: any;
  name: string;
  date: string;
  amount: string;
  card: string;
  type: string;
}

const ActivityEntry = (props: ActivityProps) => {
  return (
    <ContainerView>
      <ActivityIcon source={props.image} />
      <DetailsView>
        <ActivityName>{props.name}</ActivityName>
        <ActivityDate>{props.date}</ActivityDate>
      </DetailsView>
      <PriceView>
        <ActivityPrice
          style={{ color: props.type === "expense" ? "#FF6D6D" : "#00BB32" }}
        >
          {props.amount}
        </ActivityPrice>
        <ActivityCard>{props.card}</ActivityCard>
      </PriceView>
    </ContainerView>
  );
};

export default ActivityEntry;
