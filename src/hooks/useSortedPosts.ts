import { useMemo } from "react";
import { IPost } from "../types/models";

export const useSortedPosts = (
    posts: IPost[],
    sort: "id" | "userId" | "title" | "body"
): IPost[] => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => {
                if (typeof a[sort] === "number") {
                    return Number(a[sort]) - Number(b[sort]);
                } else {
                    return String(a[sort]).localeCompare(String(b[sort]));
                }
            });
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts;
};
