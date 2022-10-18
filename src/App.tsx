import React, { useState } from "react";

import Button, { ButtonTypes } from "./Components/Button";
import UserName from "./Components/UserName";
//@ts-ignore
import styles from "./App.module.css";
import Title from "./Components/Title";
import { BurgerClosedIcon, BurgerOpenedIcon } from "./Assets/icons";

import TabsList from "./Components/TabsList";
import Input from "./Components/Input";

const App = () => {
  const [isOpened, setOpened] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const onChange = (value: string) => {
    setInputValue(value);
  };

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

      <Button
        title={isOpened ? <BurgerClosedIcon /> : <BurgerOpenedIcon />}
        type={ButtonTypes.Primary}
        className={styles.BurgerButton}
        onClick={() => setOpened(!isOpened)}
      />
      <TabsList />
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder={"Placeholder"}
        title={"Title"}
        //   error={"Error"}
        //   disabled
      />
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder={"Placeholder"}
        title={"Title"}
        //   error={"Error"}
        disabled
      />
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder={"Placeholder"}
        title={"Title"}
        error={"Error text"}
        //   disabled
      />
      <div>{inputValue}</div>
    </div>
  );
};

export default App;
