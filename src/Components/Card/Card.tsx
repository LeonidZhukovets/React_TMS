import React, { FC } from "react";
import { BookmarkIcon, DisLikeIcon, LikeIcon, SettingIcon } from "../../Assets";
//@ts-ignore
import styles from "./Card.module.css";

import { CardType, Theme } from "../../constants/@types";
import { useThemeContext } from "../../Context/Theme";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "../../Redux/Reducers/postsReducer";
import { setSelectedImage } from "../../Redux/Reducers/imageReducer";

export enum CardSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

type CardProps = {
  card: CardType;
  size: CardSize;
};
const Card: FC<CardProps> = ({ card, size }) => {
  const { theme } = useThemeContext();
  const { title, text, image, date } = card;

  const dispatch = useDispatch();

  const isLarge = size === CardSize.Large;
  const isMedium = size === CardSize.Medium;
  const isSmall = size === CardSize.Small;

  const onSettingClick = () => {
    dispatch(setSelectedPost(card));
  };

  const onImageClick = () => {
    dispatch(setSelectedImage(image));
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.mediumContainer]: isMedium,
        [styles.smallContainer]: isSmall,
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <div
        className={classNames(styles.bodyContainer, {
          [styles.mediumBodyContainer]: isMedium,
          [styles.smallBodyContainer]: isSmall,
        })}
      >
        <div className={styles.infoContainer}>
          <div className={styles.headerContainer}>
            <div className={styles.date}>{date}</div>
            <div
              className={classNames(styles.title, {
                [styles.smallTitle]: !isLarge,
                [styles.lightTitle]: theme === Theme.Dark,
              })}
            >
              {title}
            </div>
          </div>
          {isLarge && (
            <div
              className={classNames(styles.description, {
                [styles.lightDescription]: theme === Theme.Dark,
              })}
            >
              {text}
            </div>
          )}
        </div>
        <img
          src={image}
          alt={""}
          className={classNames(styles.image, {
            [styles.mediumImage]: isMedium,
            [styles.smallImage]: isSmall,
          })}
          onClick={onImageClick}
        />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.iconsContainer}>
          <div className={styles.iconButton}>
            <LikeIcon />
          </div>
          <div className={styles.iconButton}>
            <DisLikeIcon />
          </div>
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.iconButton}>
            <BookmarkIcon />
          </div>
          <div className={styles.iconButton} onClick={onSettingClick}>
            <SettingIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
