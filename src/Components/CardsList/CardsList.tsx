import React, { FC } from "react";
import { CardsListType, Theme } from "../../constants/@types";
import Card from "../Card";
import { CardSize } from "../Card/Card";
import styles from "./CardsList.module.css";
import classnames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import EmptyState from "../EmptyState";

type CardsListProps = {
  cardsList: CardsListType | null;
};

const CardsList: FC<CardsListProps> = ({ cardsList }) => {
  const { theme } = useThemeContext();
  return cardsList && cardsList.length > 0 ? (
    <div
      className={classnames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <div className={styles.leftSide}>
        <Card card={cardsList[0]} size={CardSize.Large} />
        <div className={styles.mediumContainer}>
          {cardsList.map((card, index) => {
            if (index > 0 && index < 5) {
              return <Card key={index} card={card} size={CardSize.Medium} />;
            }
          })}
        </div>
      </div>
      <div className={styles.rightSide}>
        {cardsList.map((card, index) => {
          if (index >= 5) {
            return <Card key={index} card={card} size={CardSize.Small} />;
          }
        })}
      </div>
    </div>
  ) : (
    <EmptyState />
  );
};

export default CardsList;
