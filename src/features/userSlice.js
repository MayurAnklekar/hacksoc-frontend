import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  history: [],
  level: 1,
  currentBook: null,
  currentBookName:null,
  isAdmin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUser: (state, action) => {
      const { history, level, currentBook, isAdmin, currentBookName } = action.payload;
      state.history = history;
      state.level = level;
      state.currentBook = currentBook;
      state.isAdmin = isAdmin;
      state.currentBookName = currentBookName;
    },
    setLevel: (state, action) => {
      const {level} = action.payload;
      state.level = level;
    },
    setCurrentBook: (state, action) => {
      state.currentBook = action.payload;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.history = [];
      state.level = 1;
      state.isAdmin = false;
    },
  },
});

export const { login, logout, setUser, setCurrentBook, setLevel } = userSlice.actions;

export default userSlice.reducer;
