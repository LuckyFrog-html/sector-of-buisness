import { FC } from "react";
import { IPost } from "../../types/models";
import styles from "./PostsTableRow.module.scss";
import { contentSlice } from "../../store/reducers/contentSlice";
import { SortingBy } from "../../types/store";
import { useTypesDispatch } from "../../hooks/useTypesDispatch";
import classNames from "classnames";

import arrow from "../../assets/arrow.png";
import { useTypesSelector } from "../../hooks/useTypesSelector";

type PostsTableRowProps = {
    post?: IPost;
    columns?: boolean;
    columnsInfo?: { name: string; sorting: SortingBy }[];
};

const PostsTableRow: FC<PostsTableRowProps> = ({ post, columns, columnsInfo }) => {
    const { sortBy } = useTypesSelector((state) => state.contentReducer);
    const { setSortBy } = contentSlice.actions;
    const dispatch = useTypesDispatch();

    if (columns) {
        return (
            <div className={classNames(styles.container, styles.columns)}>
                {columnsInfo!.map((item, ind) => {
                    return (
                        <div
                            key={ind}
                            onClick={() => {
                                dispatch(setSortBy(item.sorting));
                            }}>
                            <p>{item.name}</p>
                            <img
                                className={classNames({
                                    [styles.active]: sortBy === item.sorting,
                                })}
                                src={arrow}
                                alt="arrow"
                            />
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.id}>
                <p>{post!.id}</p>
            </div>
            <div>
                <p>{post!.title}</p>
            </div>
            <div>
                <p>{post!.body}</p>
            </div>
        </div>
    );
};

export default PostsTableRow;
