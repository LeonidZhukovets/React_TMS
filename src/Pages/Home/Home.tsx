import React from "react";

import CardsList from "../../Components/CardsList";
import styles from "./Home.module.css";
import TabsList from "../../Components/TabsList";
import Title from "../../Components/Title";
import SelectedPostModal from "./SelectedPostModal";
import SelectedImageModal from "./SelectedImageModal";

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
    image: "https://static-cse.canva.com/blob/759807/vk1776.png",
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
      "https://funart.pro/uploads/posts/2021-03/1617038939_17-p-oboi-fon-dlya-rabochego-stola-18.jpg",
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
      "https://kartinkin.net/uploads/posts/2021-07/1625559499_19-kartinkin-com-p-krasivii-fon-anime-anime-krasivo-19.jpg",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkoLafXsc73PQGBW-ipVbOu21fVNn73Lj7Fg&usqp=CAU",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0QXbQBKi4M4Ap3BbR1NzSKyzrxcHF19WQw&usqp=CAU",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrx2OBCrwj9kLikBFjQAhCAkJRoLCl3iiBTA&usqp=CAU",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIBMRBrp-GuWF8YDx4FhGEu8w3YaHzJADAg&usqp=CAU",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdUr_D5Bp-L-qUZKocHkkKrMUxI0G_N5LYg&usqp=CAU",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXLF6vW0Z0-i2QJyJlfbRNRh5qSrqkHp4X4w&usqp=CAU",
    text: "9Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-10-27",
    lesson_num: 0,
    title:
      "9Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
  },
  {
    id: 10,
    image: "https://m-dekor.by/catalog/4784/main.webp",
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
      <SelectedImageModal />
    </div>
  );
};

export default Home;
