import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: JSON.parse(localStorage.getItem("profile")),
  modalOpen: false,
  user: null,
  change: false,
  darkMode: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = { ...action.payload };
      state.change = !state.change;
    },
    logOut: (state, action) => {
      localStorage.clear();
      state.user = null;
      state.authData = null;
      state.change = !state.change;
    },
    openModel: (state, action) => {
      state.modalOpen = !state.modalOpen;
    },

    changeDarkMode: (state, action) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { signIn, logOut, openModel, changeDarkMode } = authSlice.actions;
export default authSlice.reducer;
