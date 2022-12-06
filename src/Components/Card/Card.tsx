import React, { FC } from "react";
import { BookmarkIcon, DisLikeIcon, LikeIcon, SettingIcon } from "../../Assets";
import styles from "./Card.module.css";

import { CardType, LikeStatus, Theme } from "../../constants/@types";
import { useThemeContext } from "../../Context/Theme";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  setLikedStatus,
  setSelectedPost,
  setSavedStatus,
} from "../../Redux/Reducers/postsReducer";
import { setSelectedImage } from "../../Redux/Reducers/imageReducer";
import PostsSelectors from "../../Redux/Selectors/PostsSelectors";
import { BookmarkSelectIcon } from "../../Assets/icons/BookmarkSelectIcon";
import { useNavigate } from "react-router-dom";

export enum CardSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

type CardProps = {
  card: CardType;
  size: CardSize;
  isFromModal?: boolean;
};
const Card: FC<CardProps> = ({ card, size, isFromModal }) => {
  const { theme } = useThemeContext();
  const { title, text, image, date, id } = card;

  const dispatch = useDispatch();

  const likedPosts = useSelector(PostsSelectors.getLikedPost);
  const dislikedPosts = useSelector(PostsSelectors.getDislikedPost);
  const isLiked = likedPosts.findIndex((post) => post.id === card.id) > -1;
  const isDisLiked =
    dislikedPosts.findIndex((post) => post.id === card.id) > -1;
  const savedPosts = useSelector(PostsSelectors.getSavedPost);
  const isSaved = savedPosts.findIndex((post) => post.id === card.id) > -1;

  const isLarge = size === CardSize.Large;
  const isMedium = size === CardSize.Medium;
  const isSmall = size === CardSize.Small;

  const navigate = useNavigate();

  const onTitleClick = () => {
    navigate(`/content/${id}`);
  };

  const onSettingClick = () => {
    dispatch(setSelectedPost(card));
  };

  const onImageClick = () => {
    dispatch(setSelectedImage(image));
  };

  const onStatusClick = (likeStatus: LikeStatus) => () => {
    dispatch(setLikedStatus({ card, likeStatus }));
  };

  const onBookmarkClick = () => {
    dispatch(setSavedStatus(card));
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
              onClick={onTitleClick}
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
          onClick={isFromModal ? onImageClick : undefined}
        />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.iconsContainer}>
          <div
            className={styles.iconButton}
            onClick={onStatusClick(LikeStatus.Like)}
          >
            <LikeIcon />{" "}
            {isLiked && <span className={styles.likeCounter}> 1</span>}
          </div>
          <div
            className={styles.iconButton}
            onClick={onStatusClick(LikeStatus.Dislike)}
          >
            <DisLikeIcon />{" "}
            {isDisLiked && <span className={styles.likeCounter}> 1</span>}
          </div>
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.iconButton} onClick={onBookmarkClick}>
            {isSaved ? <BookmarkSelectIcon /> : <BookmarkIcon />}
          </div>
          <div
            className={styles.iconButton}
            onClick={!isFromModal ? onSettingClick : undefined}
          >
            <SettingIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
