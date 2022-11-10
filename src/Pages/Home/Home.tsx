import React from "react";

import CardsList from "../../Components/CardsList";
import styles from "./Home.module.css";
import TabsList from "../../Components/TabsList";
import Title from "../../Components/Title";
import SelectedPostModal from "./SelectedPostModal";

// const MOCK_CARD = {
//   id: 0,
//   image:
//     "https://images.all-free-download.com/images/graphiclarge/december_sunset_564887.jpg",
//   text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
//   date: "2022-10-27",
//   lesson_num: 0,
//   title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
//   author: 0,
// };

const MOCK_CARDS_LIST = [
  {
    id: 0,
    image:
      "https://images.all-free-download.com/images/graphiclarge/december_sunset_564887.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-10-27",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 1,
    image:
      "https://images.all-free-download.com/images/graphiclarge/december_sunset_564887.jpg",
    text: "1Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-10-27",
    lesson_num: 0,
    title:
      "1Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 2,
    image:
      "https://images.all-free-download.com/images/graphiclarge/december_sunset_564887.jpg",
    text: "2Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-10-27",
    lesson_num: 0,
    title:
      "2Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 3,
    image:
      "https://images.all-free-download.com/images/graphiclarge/december_sunset_564887.jpg",
    text: "3Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-10-27",
    lesson_num: 0,
    title:
      "3Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 4,
    image:
      "https://images.all-free-download.com/images/graphiclarge/december_sunset_564887.jpg",
    text: "4Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-10-27",
    lesson_num: 0,
    title:
      "4Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 5,
    image:
      "https://images.all-free-download.com/images/graphiclarge/december_sunset_564887.jpg",
    text: "5Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-10-27",
    lesson_num: 0,
    title:
      "5Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 6,
    image:
      "https://images.all-free-download.com/images/graphiclarge/december_sunset_564887.jpg",
    text: "6Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-10-27",
    lesson_num: 0,
    title:
      "6Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 7,
    image:
      "https://images.all-free-download.com/images/graphiclarge/december_sunset_564887.jpg",
    text: "7Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-10-27",
    lesson_num: 0,
    title:
      "7Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 8,
    image:
      "https://images.all-free-download.com/images/graphiclarge/december_sunset_564887.jpg",
    text: "8Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-10-27",
    lesson_num: 0,
    title:
      "8Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 9,
    image:
      "https://images.all-free-download.com/images/graphiclarge/december_sunset_564887.jpg",
    text: "9Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-10-27",
    lesson_num: 0,
    title:
      "9Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 10,
    image:
      "https://images.all-free-download.com/images/graphiclarge/december_sunset_564887.jpg",
    text: "10Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-10-27",
    lesson_num: 0,
    title:
      "10Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
];
const Home = () => {
  return (
    <div className={styles.container}>
      <Title title={"Blog"} />
      <TabsList />
      <CardsList cardsList={MOCK_CARDS_LIST} />
      <SelectedPostModal />
    </div>
  );
};

export default Home;
