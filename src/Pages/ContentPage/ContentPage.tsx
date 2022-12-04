import React, { useEffect } from "react";
import Button, { ButtonTypes } from "../../Components/Button";
import { BookmarkIcon, DisLikeIcon, LikeIcon } from "../../Assets";
import styles from "./ContenePage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PathNames } from "../Router/Router";
import postsSelectors from "../../Redux/Selectors/PostsSelectors";
import { getSinglePost } from "../../Redux/Reducers/postsReducer";

const ContentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    if (id) {
      dispatch(getSinglePost(id));
    }
  }, []);

  const card = useSelector(postsSelectors.getSinglePost);
  return card ? (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div>Home</div>
        <span>|</span>
        <div>Post 14278</div>
      </div>

      <h1 className={styles.title} onClick={() => navigate(PathNames.Home)}>
        {card?.title}
      </h1>
      <img src={card?.image} alt={"image"} className={styles.image} />
      <div className={styles.mainContainer}>
        <div className={styles.description}>{card?.text}</div>
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
  ) : null;
};
export default ContentPage;
