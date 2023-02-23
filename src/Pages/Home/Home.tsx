import React, { useEffect, useMemo, useState } from "react";

import CardsList from "../../Components/CardsList";
import styles from "./Home.module.css";
import TabsList from "../../Components/TabsList";
import Title from "../../Components/Title";
import SelectedPostModal from "./SelectedPostModal";
import SelectedImageModal from "./SelectedImageModal";
import { Order, Tabs } from "../../constants/@types";
import { useDispatch, useSelector } from "react-redux";
import PostsSelectors from "../../Redux/Selectors/PostsSelectors";
import { getMyPosts, getPosts } from "../../Redux/Reducers/postsReducer";
import AuthSelectors from "../../Redux/Selectors/authSelectors";
import Loader from "../../Components/Loader";
import { PER_PAGE } from "../../constants/consts";
import classNames from "classnames";
import Button, { ButtonTypes } from "../../Components/Button";

const Home = () => {
  const [activeTab, setActiveTab] = useState(Tabs.All);
  const onTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [ordering, setOrdering] = useState("");

  const onClickButtonOrdering = (order: Order) => () => {
    if (ordering === order) {
      setOrdering("");
    } else setOrdering(order);
    setCurrentPage(1);
  };

  const likedPosts = useSelector(PostsSelectors.getLikedPost);
  const savedPosts = useSelector(PostsSelectors.getSavedPost);
  const allPosts = useSelector(PostsSelectors.getAllPosts);
  const myPosts = useSelector(PostsSelectors.getMyPosts);
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const isLoading = useSelector(PostsSelectors.getPostsLoading);
  const totalCount = useSelector(PostsSelectors.getTotalCount);
  const totalPagesCount = Math.ceil(totalCount / PER_PAGE);

  const pages = Array.from(Array(totalPagesCount).keys());

  const cardArray = () => {
    if (activeTab === Tabs.Popular) {
      return likedPosts;
    } else if (activeTab === Tabs.Favorites) {
      return savedPosts;
    } else if (activeTab === Tabs.MyPosts) {
      return myPosts;
    } else {
      return allPosts;
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const offset = PER_PAGE * (currentPage - 1);
    if (activeTab === Tabs.MyPosts) {
      dispatch(getMyPosts());
    } else {
      dispatch(getPosts({ offset, ordering }));
    }
  }, [activeTab, currentPage, ordering]);

  const TABS_NAMES = useMemo(
    () => [
      { name: "All", key: Tabs.All },
      ...(isLoggedIn
        ? [
            { name: "My Favorites", key: Tabs.Favorites },
            { name: "My Posts", key: Tabs.MyPosts },
          ]
        : []),
      { name: "Popular", key: Tabs.Popular },
    ],
    [isLoggedIn]
  );

  const onPageChange = (page: number) => () => setCurrentPage(page);
  return (
    <div className={styles.container}>
      <Title title={"Blog"} />
      {!isLoading ? (
        <>
          <TabsList
            activeTab={activeTab}
            onSelectTab={onTabClick}
            tabsList={TABS_NAMES}
          />
          <div className={styles.orderingBlock}>
            <Button
              className={classNames({
                [styles.clicked]: ordering === Order.Date,
              })}
              title={"Date"}
              type={ButtonTypes.Primary}
              onClick={onClickButtonOrdering(Order.Date)}
            />
            <Button
              className={classNames({
                [styles.clicked]: ordering === Order.Title,
              })}
              title={"Title"}
              type={ButtonTypes.Primary}
              onClick={onClickButtonOrdering(Order.Title)}
            />
          </div>
          <CardsList cardsList={cardArray()} />
          <div className={styles.paginationContainer}>
            <div
              className={styles.prev}
              onClick={
                currentPage !== 1 ? onPageChange(currentPage - 1) : undefined
              }
            >
              Prev
            </div>
            <div className={styles.pagesList}>
              {pages.map((i) => (
                <div
                  key={i}
                  className={classNames(styles.page, {
                    [styles.activePage]: i + 1 === currentPage,
                  })}
                  onClick={onPageChange(i + 1)}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div
              className={styles.next}
              onClick={
                currentPage !== totalPagesCount
                  ? onPageChange(currentPage + 1)
                  : undefined
              }
            >
              Next
            </div>
          </div>
          <SelectedPostModal />
          <SelectedImageModal />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
