import { useTypesDispatch } from "../../hooks/useTypesDispatch";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { contentSlice } from "../../store/reducers/contentSlice";
import styles from "./PostPagination.module.scss";
import cn from "classnames";

const PostPagination = () => {
    const { currPage, totalPages } = useTypesSelector(
        (state) => state.contentReducer
    );
    const { setCurrPage } = contentSlice.actions;
    const dispatch = useTypesDispatch();

    return (
        <div className={styles.container}>
            <p
                onClick={() => {
                    if (currPage !== 1) dispatch(setCurrPage(currPage - 1));
                }}
                className={cn(styles.arrow, {
                    [styles.inactive]: currPage === 1,
                })}>
                Назад
            </p>
            <div className={styles.bullets}>
                {/* Создание пунтков навигации в зависимости от количества страниц */}
                {Array(totalPages)
                    .fill(0)
                    .map((it, ind) => {
                        return (
                            <div
                                onClick={() => dispatch(setCurrPage(ind + 1))}
                                className={cn(styles.bullet, {
                                    [styles.active]: currPage === ind + 1,
                                })}
                                key={ind}>
                                {ind + 1}
                            </div>
                        );
                    })}
            </div>
            <p
                onClick={() => {
                    if (currPage !== totalPages) dispatch(setCurrPage(currPage + 1));
                }}
                className={cn(styles.arrow, {
                    [styles.inactive]: currPage === totalPages,
                })}>
                Далее
            </p>
        </div>
    );
};

export default PostPagination;
