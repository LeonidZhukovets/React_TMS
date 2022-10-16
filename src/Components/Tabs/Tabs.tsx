import React, { FC, useCallback } from "react";
import classNames from "classnames";

//@ts-ignore
import styles from "./Tabs.module.css";

export type ItemTab = {
  title: string;
  id: number;
  className?: string;
  disabled?: boolean;
};

type TabsProps = {
  tabs: ItemTab[];
  onClick: (id: number) => void;
  activeTabId: number;
};

const Tabs: FC<TabsProps> = (props) => {
  const { tabs, onClick, activeTabId } = props;

  return (
    <div className={styles.tabs}>
      {tabs.map((tabItem) => (
        <div className={styles.tab} onClick={() => onClick(tabItem.id)}>
          {tabItem.title}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
