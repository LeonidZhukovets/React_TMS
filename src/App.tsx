import React from "react";

//@ts-ignore
import styles from "./App.module.css";
import Success from "./Pages/Success";

const App = () => {
  return (
    <div className={styles.container}>
      <Success />
    </div>
  );
};

export default App;
