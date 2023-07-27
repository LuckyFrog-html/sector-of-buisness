import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContentInterface, SortingBy } from "../../types/store";

const initialState: ContentInterface = {
    currPage: 1,
    totalPages: 1,
    sortBy: "id",
    query: "",
};

export const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        setCurrPage(state, action: PayloadAction<number>) {
            state.currPage = action.payload;
        },
        setTotalPages(state, action: PayloadAction<number>) {
            state.totalPages = action.payload;
        },
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
        setSortBy(state, action: PayloadAction<SortingBy>) {
            state.sortBy = action.payload;
        },
    },
});

export default contentSlice.reducer;
