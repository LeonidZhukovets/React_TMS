import React, { useState } from "react";

import ThemeProvider from "./Context/Theme";
import { Theme } from "./constants/@types";

import Router from "./Pages/Router";

const App = () => {
  const [theme, setTheme] = useState(Theme.Dark);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
