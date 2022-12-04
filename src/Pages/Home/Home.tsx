import React, { useEffect, useState } from "react";

import CardsList from "../../Components/CardsList";
import styles from "./Home.module.css";
import TabsList from "../../Components/TabsList";
import Title from "../../Components/Title";
import SelectedPostModal from "./SelectedPostModal";
import SelectedImageModal from "./SelectedImageModal";
import { Tabs } from "../../constants/@types";
import { useDispatch, useSelector } from "react-redux";
import PostsSelectors from "../../Redux/Selectors/PostsSelectors";
import { getPosts } from "../../Redux/Reducers/postsReducer";

const Home = () => {
  const [activeTab, setActiveTab] = useState(Tabs.All);
  const onTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };

  const likedPosts = useSelector(PostsSelectors.getLikedPost);
  const savedPosts = useSelector(PostsSelectors.getSavedPost);
  const allPosts = useSelector(PostsSelectors.getAllPosts);

  const cardArray = () => {
    if (activeTab === Tabs.Popular) {
      return likedPosts;
    } else if (activeTab === Tabs.Favorites) {
      return savedPosts;
    } else {
      return allPosts;
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className={styles.container}>
      <Title title={"Blog"} />
      <TabsList activeTab={activeTab} onSelectTab={onTabClick} />
      <CardsList cardsList={cardArray()} />
      <SelectedPostModal />
      <SelectedImageModal />
    </div>
  );
};

export default Home;
