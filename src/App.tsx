import React, { useState } from "react";

import Button, { ButtonTypes } from "./Components/Button";
import UserName from "./Components/UserName";
//@ts-ignore
import styles from "./App.module.css";
import Title from "./Components/Title";
import Hamburger from "./Components/Hamburger";

const App = () => {
  const [isOpen, setOpened] = useState(false);

  return (
    <div className={styles.container}>
      <Button
        title={"Primary"}
        type={ButtonTypes.Primary}
        onClick={() => alert("Primary")}
      />
      <Button
        title={"Secondary"}
        type={ButtonTypes.Secondary}
        onClick={() => alert("Secondary")}
      />
      <Button
        title={"Error"}
        type={ButtonTypes.Error}
        onClick={() => alert("Error")}
      />
      <UserName username={"Artem_Malkin"} />

      <Title title={"Sign In"} />

      <Hamburger isOpened={isOpen} onClick={() => setOpened(!isOpen)} />
    </div>
  );
};

export default App;
