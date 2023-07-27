import { useMemo, useRef } from "react";
import { IPost } from "../types/models";
import { SortingBy } from "../types/store";
import { useSortedPosts } from "./useSortedPosts";
import { isNum } from "../utils/isNum";

// Хук возвращает фильтрованные и сортированные посты,
// а также количество страниц в зависимисти от limit и количества подходящих постов
export const useResultPosts = (
    posts: IPost[],
    page: number,
    sort: SortingBy,
    query: string,
    limit: number
): [IPost[], number] => {
    const sortedPosts = useSortedPosts(posts, sort);
    let totalPages = useRef<number>(0);

    const sortedAndSearchedPosts = useMemo(() => {
        const filteredPosts = sortedPosts.filter((post) => {
            if (isNum(query)) {
                return String(post.id).includes(query);
            }
            return (
                post.title.toLowerCase().includes(query.toLowerCase()) ||
                post.body.toLowerCase().includes(query.toLowerCase())
            );
        });

        totalPages.current = Math.ceil(filteredPosts.length / limit);
        return filteredPosts.slice((page - 1) * limit, page * limit);
    }, [query, sortedPosts, page, limit, totalPages]);

    return [sortedAndSearchedPosts, totalPages.current];
};
