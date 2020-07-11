import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import ActivityEntry from "./components/ActivityEntry";
import Card from "./components/Card";

const Container = styled.View`
  flex: 1;
  background: white;
`;

const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
`;

const BalanceVertical = styled.View`
  margin-left: 20px;
`;

const Balance = styled.Text`
  font-size: 34px;
  font-weight: 900;
  color: white;
  margin-bottom: 5px;
`;

const BalanceSubHeader = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: white;
  opacity: 0.8;
`;

const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  border-color: white;
  border-width: 2px;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const HeaderBottom = styled.View`
  flex-direction: row;
  align-items: center;
  background: white;
  width: 90%;
  padding: 9px 10px;
  border-radius: 15px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

const SearchIcon = styled.Image`
  width: 21px;
  height: 21px;
  margin-left: 10px;
  margin-right: 12px;
`;

const SettingsIcon = styled.Image`
  margin-left: auto;
  width: 38px;
  height: 38px;
`;

const MainText = styled.Text`
  font-weight: bold;
  border: 2px solid orange;
`;

const SearchInput = styled.TextInput`
  color: #464b53;
  font-size: 18px;
  font-weight: bold;
`;

const PageContent = styled.ScrollView`
  background: white;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  margin-top: -30px;
  box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.1);
`;

const GrayTab = styled.View`
  background: rgba(70, 75, 83, 0.2);
  border-radius: 4px;
  width: 40px;
  height: 6px;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Heading = styled.Text`
  font-weight: 800;
  font-size: 31px;
  line-height: 41px;
  color: #464b53;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const CardsSlider = styled.ScrollView`
  margin-bottom: 15px;
`;

export default function App() {
  // React hooks used for the search bar text
  const [searchInput, setSearchInput] = useState("");

  const activityHistory = [
    {
      image: require("./assets/pizza-icon.png"),
      name: "Uber Eats",
      date: "9:41AM",
      amount: "-$36.92",
      card: "Visa 2819",
      type: "expense",
      id: "002",
    },
    {
      image: require("./assets/fireworks-icon.png"),
      name: "Fireworks LLC.",
      date: "8:53AM",
      amount: "-$1,291.39",
      card: "MC 9472",
      type: "expense",
      id: "003",
    },
    {
      image: require("./assets/payment-icon.png"),
      name: "Zelle Payment",
      date: "July 3, 2020",
      amount: "+$500.00",
      card: "Visa 2819",
      type: "income",
      id: "004",
    },
    {
      image: require("./assets/clothing-icon.png"),
      name: "Supreme NYC",
      date: "July 2, 2020",
      amount: "-$283.28",
      card: "Privacy 5836",
      type: "expense",
      id: "005",
    },
    {
      image: require("./assets/pizza-icon.png"),
      name: "Ristorante Z",
      date: "July 1, 2020",
      amount: "-$17.44",
      card: "Visa 2819",
      type: "expense",
      id: "006",
    },
  ];

  const handleSearch = (event: any) => {
    let text = event.nativeEvent.text;
    setSearchInput(text);
  };

  return (
    <Container>
      {/* Top layout created and using LinearGradient to achieve the linear gradient background on that section */}
      {/* TODO: Move header into its own component */}
      <LinearGradient
        colors={["#FF686D", "#FEBA71"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: "100%",
          paddingTop: 60,
          paddingBottom: 60,
          alignItems: "center",
        }}
      >
        <HeaderTop>
          <BalanceVertical>
            <Balance>$17,386.79</Balance>
            <BalanceSubHeader>Total Balance</BalanceSubHeader>
          </BalanceVertical>
          <Avatar source={require("./assets/person.png")} />
        </HeaderTop>
        <HeaderBottom>
          <SearchIcon source={require("./assets/search-icon.png")} />
          <SearchInput placeholder={"Search"} onChange={handleSearch} />
          <SettingsIcon source={require("./assets/settings-icon.png")} />
        </HeaderBottom>
      </LinearGradient>
      <PageContent>
        <GrayTab />
        {/* Cards are only rendered if there is no text in the search bar, otherwise they are replaced with an empty View */}
        {!searchInput.length ? <Heading>Cards</Heading> : <View />}
        {!searchInput.length ? (
          <CardsSlider horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card
              lastFour={2819}
              type={"visa"}
              availableBalance={"$7,301.94"}
              backgroundImage={require("./assets/card-bg-1.png")}
            />
            <Card
              lastFour={9472}
              type={"visa"}
              availableBalance={"$1,991.29"}
              backgroundImage={require("./assets/card-bg-2.png")}
            />
            <Card
              lastFour={4937}
              type={"visa"}
              availableBalance={"$4,160.29"}
              backgroundImage={require("./assets/card-bg-1.png")}
            />
          </CardsSlider>
        ) : (
          <View />
        )}
        <Heading>Activity</Heading>

        {/* If there is something in the search bar, only show the entries which include the search bar text in their names */}
        {/* Otherwise, display all activities without any filtering */}

        {searchInput.length
          ? activityHistory
              .filter((activity: any) => {
                return activity.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              })
              .map((activity) => {
                return (
                  <ActivityEntry
                    image={activity.image}
                    name={activity.name}
                    date={activity.date}
                    amount={activity.amount}
                    card={activity.card}
                    type={activity.type}
                    key={activity.id}
                  />
                );
              })
          : activityHistory.map((activity) => {
              return (
                <ActivityEntry
                  image={activity.image}
                  name={activity.name}
                  date={activity.date}
                  amount={activity.amount}
                  card={activity.card}
                  type={activity.type}
                  key={activity.id}
                />
              );
            })}
      </PageContent>
    </Container>
  );
}
