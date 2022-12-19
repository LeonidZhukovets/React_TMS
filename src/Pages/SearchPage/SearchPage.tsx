import React, { useEffect, useState } from "react";

import CardsList from "../../Components/CardsList";
import styles from "./SearchPage.module.css";
import Title from "../../Components/Title";

import { useDispatch, useSelector } from "react-redux";
import PostsSelectors from "../../Redux/Selectors/PostsSelectors";
import { getPosts } from "../../Redux/Reducers/postsReducer";
import Loader from "../../Components/Loader";
import { PER_PAGE } from "../../constants/consts";
import classNames from "classnames";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const allPosts = useSelector(PostsSelectors.getAllPosts);
  const isLoading = useSelector(PostsSelectors.getPostsLoading);
  const totalCount = useSelector(PostsSelectors.getTotalCount);
  const totalPagesCount = Math.ceil(totalCount / PER_PAGE);

  const pages = Array.from(Array(totalPagesCount).keys());
  const { searchString } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    const offset = PER_PAGE * (currentPage - 1);

    dispatch(getPosts({ offset, search: searchString }));
  }, [currentPage, searchString]);

  const onPageChange = (page: number) => () => setCurrentPage(page);

  return (
    <div className={styles.container}>
      <Title title={"Search results: "} />
      {!isLoading ? (
        <>
          <CardsList cardsList={allPosts} />
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
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SearchPage;
