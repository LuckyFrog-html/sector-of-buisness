import { useState, useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import PostsService from "../../../http/PostsService";
import styles from "./Posts.module.scss";
import { IPost } from "../../../types/models";
import { useTypesSelector } from "../../../hooks/useTypesSelector";
import { contentSlice } from "../../../store/reducers/contentSlice";
import { useResultPosts } from "../../../hooks/useResultPosts";
import { useTypesDispatch } from "../../../hooks/useTypesDispatch";
import PostSearch from "../../PostSearch/PostSearch";
import PostsTable from "../../PostsTable/PostsTable";
import { Oval } from "react-loader-spinner";
import PostPagination from "../../PostPagination/PostPagination";

const limit = 10;

const Posts = () => {
    const { sortBy, query, currPage } = useTypesSelector(
        (state) => state.contentReducer
    );
    const { setTotalPages } = contentSlice.actions;
    const dispatch = useTypesDispatch();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [resultPosts, totalPages] = useResultPosts(
        posts,
        currPage,
        sortBy,
        query,
        limit
    );

    useEffect(() => {
        dispatch(setTotalPages(totalPages));
        //eslint-disable-next-line
    }, [totalPages]);

    const [fetchPosts, isLoading, error] = useFetch(async () => {
        const res = await PostsService.getAll();
        setPosts(res.data);
    });

    useEffect(() => {
        fetchPosts();
        //eslint-disable-next-line
    }, []);

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <Oval />
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.loading}>
                <p>Произошла ошибка</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <PostSearch />
            <PostsTable posts={resultPosts} />
            <PostPagination />
        </div>
    );
};

export default Posts;
