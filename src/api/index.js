import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });
const API = axios.create({ baseURL: "https://library-backend-five.vercel.app" });

export const signIn = (formValues) => API.post("/user/signin", formValues);
export const signUp = (formValues) => API.post("/user/signup", formValues);
export const getPreviewBooks = () => API.get("/");

export const getBooksByExactCategory = (page, category) =>
  API.get(`/exactbooks?category=${category}&page=${page}`);

export const getExactBook = (id) => API.get(`/${id}`);

export const getNameOfAllBooks = () =>
  API.get("/getAllBooksForSearchBarSuggestion");

export const getFindBook = (title) => API.get(`/search?title=${title}`);
