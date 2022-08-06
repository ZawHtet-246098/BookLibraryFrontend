import * as api from "../api";
import {
  getPreviewBooks,
  getBooksByExactPageAndCategory,
  getExactBook,
  getAllNames,
  getSearchBookData,
} from "../Slices/books";
import { startLoading, endLoading } from "../Slices/books";

export const fetchPreviewBooks = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.getPreviewBooks();
    dispatch(getPreviewBooks(data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchBooksWithExactCathegory =
  (page, category) => async (dispatch) => {
    try {
      dispatch(startLoading());
      const { data } = await api.getBooksByExactCategory(category, page);
      await dispatch(getBooksByExactPageAndCategory(data));
      window.scrollTo({ top: 0 });
    } catch (error) {
      console.log(error);
    }
  };

export const fetchExactBook = (id) => async (dispatch) => {
  try {
    const { data } = await api.getExactBook(id);

    dispatch(getExactBook({ id, data }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllName = () => async (dispatch) => {
  try {
    const { data } = await api.getNameOfAllBooks();
    dispatch(getAllNames(data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchFindBook = (title, navigate) => async (dispatch) => {
  try {
    console.log(title);
    const { data } = await api.getFindBook(title);

    navigate(`/${data[0]._id}`);

    dispatch(getSearchBookData(data[0]));
  } catch (error) {
    console.log(error);
  }
};
