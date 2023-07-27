import { useState } from "react";
import styles from "./PostSearch.module.scss";

import searchIcon from "../../assets/search.png";
import { useTypesDispatch } from "../../hooks/useTypesDispatch";
import { contentSlice } from "../../store/reducers/contentSlice";

const PostSearch = () => {
    const { setQuery, setCurrPage } = contentSlice.actions;
    const dispatch = useTypesDispatch();
    const [inputQuery, setInputQuery] = useState<string>("");

    const queryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputQuery(e.target.value);
    };

    return (
        <div className={styles.container}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(setQuery(inputQuery));
                    // При поиске сбрасываем текущую страницу до 1
                    dispatch(setCurrPage(1));
                }}>
                <input
                    onInput={queryHandler}
                    placeholder="Поиск"
                    type="text"
                />
                <input
                    className={styles.img}
                    alt="Search"
                    type="image"
                    src={searchIcon}
                />
            </form>
        </div>
    );
};

export default PostSearch;
