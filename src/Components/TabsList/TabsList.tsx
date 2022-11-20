import React, { FC } from "react";
import classNames from "classnames";
import styles from "./TabsList.module.css";
import { Tabs } from "../../constants/@types";

const TABS_NAMES = [
  { name: "All", key: Tabs.All },
  { name: "My favorites", key: Tabs.Favorites },
  { name: "Popular", key: Tabs.Popular },
];

type TabProps = {
  activeTab: Tabs;
  onSelectTab: (tab: Tabs) => void;
};

const TabsList: FC<TabProps> = ({ activeTab, onSelectTab }) => {
  return (
    <div className={styles.container}>
      {TABS_NAMES.map((tab) => {
        return (
          <div className={styles.tabs}>
            <div
              key={tab.key}
              onClick={() => onSelectTab(tab.key)}
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
