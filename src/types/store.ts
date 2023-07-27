export type SortingBy = "id" | "userId" | "title" | "body";

export type ContentInterface = {
    sortBy: SortingBy;
    currPage: number;
    totalPages: number;
    query: string;
};
