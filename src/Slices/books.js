import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: null,
  booksbyCategory: null,
  loading: true,
  page: 1,
  category: "Technology",
  currentSec: "All Books",
  totalNum: null,
  exactBookData: null,
  exactBookId: null,
  allBooksName: null,
  searchValue: "",
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getPreviewBooks: (state, action) => {
      state.books = action.payload;
      state.loading = false;
    },
    getAllNames: (state, action) => {
      state.allBooksName = action.payload;
    },
    startLoading: (state, action) => {
      state.loading = true;
    },
    endLoading: (state, action) => {
      state.loading = false;
    },
    changeCurrentSec: (state, action) => {
      state.currentSec = action.payload;
    },
    getBooksByExactPageAndCategory: (state, action) => {
      state.booksbyCategory = action.payload.data;
      state.totalNum = action.payload.numberOfPages;
      localStorage.setItem("similarBooks", JSON.stringify(action.payload.data));
      state.loading = false;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
    getExactBook: (state, action) => {
      state.exactBookData = action.payload.data;
      state.exactBookId = action.payload.id;

      localStorage.setItem(
        "exactBook",
        JSON.stringify({ ...action.payload.data })
      );
    },
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    deleteSearchValue: (state, action) => {
      state.searchValue = "";
    },
    getSearchBookData: (state, action) => {
      state.exactBookData = action.payload;
      state.category = action.payload.category;
      state.searchValue = "";
    },
  },
});

export const {
  getPreviewBooks,
  startLoading,
  endLoading,
  changeCurrentSec,
  getBooksByExactPageAndCategory,
  changePage,
  getExactBook,
  getAllNames,
  changeSearchValue,
  getSearchBookData,
  deleteSearchValue,
} = bookSlice.actions;
export default bookSlice.reducer;
