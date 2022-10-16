import React, { useState } from "react";

import Button, { ButtonTypes } from "./Components/Button";
import UserName from "./Components/UserName";
//@ts-ignore
import styles from "./App.module.css";
import Title from "./Components/Title";
import Hamburger from "./Components/Hamburger";
import Tabs from "./Components/Tabs";

const App = () => {
  const [isOpen, setOpened] = useState(false);
  const tabsItem = [
    { title: "All", id: 1 },
    { title: "My favorites", id: 2 },
    { title: "Popular", id: 3 },
  ];
  const [activeTabId, setActiveTabId] = useState(1);
  const handleTabClick = (id: number) => {
    setActiveTabId(id);
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

      <Hamburger isOpened={isOpen} onClick={() => setOpened(!isOpen)} />
      <Tabs
        activeTabId={activeTabId}
        tabs={tabsItem}
        onClick={handleTabClick}
      ></Tabs>
      {activeTabId === 1 && <div>Tab1 works</div>}
      {activeTabId === 2 && <div>Tab2 works</div>}
      {activeTabId === 3 && <div>Tab3 works</div>}
    </div>
  );
};

export default App;
