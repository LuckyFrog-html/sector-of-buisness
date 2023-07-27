import { FC } from "react";
import { IPost } from "../../types/models";
import styles from "./PostsTable.module.scss";
import PostsTableRow from "../PostsTableRow/PostsTableRow";

type PostsTableProps = {
    posts: IPost[];
};

const PostsTable: FC<PostsTableProps> = ({ posts }) => {
    return (
        <div className={styles.container}>
            <PostsTableRow
                columns
                columnsInfo={[
                    { name: "ID", sorting: "id" },
                    { name: "Заголовок", sorting: "title" },
                    { name: "Описание", sorting: "body" },
                ]}
            />
            {posts.length ? (
                posts.map((item, ind) => {
                    return (
                        <PostsTableRow
                            post={item}
                            key={ind}
                        />
                    );
                })
            ) : (
                <div className={styles.empty}>
                    <p>Постов не найдено!</p>
                </div>
            )}
        </div>
    );
};

export default PostsTable;
