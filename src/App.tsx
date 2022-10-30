import React, { useState, useEffect } from "react";

//@ts-ignore
import styles from "./App.module.css";
// import Card from "./Components/Card";
// import { CardSize } from "./Components/Card/Card";
import CardsList from "./Components/CardsList";
import { CardsListType } from "./constants/@types";

const MOCK_CARD = {
  id: 0,
  image:
    "https://images.all-free-download.com/images/graphiclarge/december_sunset_564887.jpg",
  text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  date: "2022-10-27",
  lesson_num: 0,
  title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
  author: 0,
};

const MOCK_CARDS_LIST = [
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
];

const App = () => {
  const [cardsList, setCardsList] = useState<CardsListType | null>(null);

  useEffect(() => {
    const cardListData: CardsListType = MOCK_CARDS_LIST;
    if (cardListData?.length) {
      setCardsList(cardListData);
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* <Card card={MOCK_CARD} size={CardSize.Small} /> */}
      <CardsList cardsList={cardsList} />
    </div>
  );
};

export default App;
