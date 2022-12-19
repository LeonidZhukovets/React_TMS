import React, { FC } from "react";
import classNames from "classnames";
import styles from "./TabsList.module.css";
import { Tabs } from "../../constants/@types";

type TabProps = {
  activeTab: Tabs;
  onSelectTab: (tab: Tabs) => void;
  tabsList: Array<{ name: string; key: Tabs }>;
};

const TabsList: FC<TabProps> = ({ activeTab, onSelectTab, tabsList }) => {
  return (
    <div className={styles.container}>
      {tabsList.map((tab) => {
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
