import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import ThemeProvider from "./Context/Theme";
import { Theme } from "./constants/@types";

import Router from "./Pages/Router";
import { store } from "./Redux/store";
import { setTheme } from "./Redux/Reducers/themeReducer";
import ThemeSelectors from "./Redux/Selectors/themeSelectors";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(ThemeSelectors.getTheme);

  const onChangeTheme = (value: Theme) => {
    dispatch(setTheme(value));
  };
  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
};

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithStore;
