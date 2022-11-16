import React, { FC } from "react";
import { CardType } from "../../constants/@types";
import Button, { ButtonTypes } from "../../Components/Button";
import { BookmarkIcon, DisLikeIcon, LikeIcon } from "../../Assets";
import styles from "./ContenePage.module.css";

type ContentPageProps = {
  card: CardType;
};

const ContentPage: FC<ContentPageProps> = ({ card }) => {
  const { title, text, image } = card;
  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div>Home</div>
        <span>|</span>
        <div>Post 14278</div>
      </div>

      <h1 className={styles.title}>{title}</h1>
      <img src={image} alt={"image"} className={styles.image} />
      <div className={styles.mainContainer}>
        <div className={styles.description}>{text}</div>
        <div className={styles.buttonContainer}>
          <div className={styles.likeContainer}>
            <Button
              icon={<LikeIcon />}
              type={ButtonTypes.Like}
              onClick={() => {}}
              className={styles.likeIcon}
            />
            <Button
              icon={<DisLikeIcon />}
              type={ButtonTypes.Dislike}
              onClick={() => {}}
              className={styles.disLikeIcon}
            />
          </div>
          <Button
            icon={<BookmarkIcon />}
            title={"Add to favorites"}
            type={ButtonTypes.Bookmark}
            onClick={() => {}}
            className={styles.bookmarkIcon}
          />
        </div>
      </div>
    </div>
  );
};
export default ContentPage;
