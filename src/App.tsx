import React, { useState } from "react";

import ThemeProvider from "./Context/Theme";
import { Theme } from "./constants/@types";

import Router from "./Pages/Router";
import ContentPage from "./Pages/ContentPage";

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

const App = () => {
  const [theme, setTheme] = useState(Theme.Dark);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      {/*<Router />*/}
      <ContentPage card={MOCK_CARD} />
    </ThemeProvider>
  );
};

export default App;
