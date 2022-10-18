import React, { useState } from "react";
import classNames from "classnames";

//@ts-ignore
import styles from "./TabsList.module.css";

enum Tabs {
  All = "All",
  Favorites = "My favorites",
  Popular = "Popular",
}
const TABS_NAMES = [
  { name: "All", key: Tabs.All },
  { name: "My favorites", key: Tabs.Favorites },
  { name: "Popular", key: Tabs.Popular },
];

const TabsList = () => {
  const [activeTab, setActiveTab] = useState(Tabs.All);

  const onTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };
  return (
    <div className={styles.container}>
      {TABS_NAMES.map((tab) => {
        return (
          <div className={styles.tabs}>
            <div
              key={tab.key}
              onClick={() => onTabClick(tab.key)}
              className={classNames([styles.tab], {
                [styles.activeTab]: tab.key === activeTab,
              })}
            >
              {tab.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TabsList;
