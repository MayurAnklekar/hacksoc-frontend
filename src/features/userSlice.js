import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user:null,
  history:[],
  level:1,
  currentBook:null,
  isAdmin:false,
};



export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUser: (state, action) => {
      const {history, level, currentBook, isAdmin} = action.payload;
      state.history = history;
      state.level = level;
      state.currentBook = currentBook;
      state.isAdmin = isAdmin;
    },
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null;
      state.history = [];
      state.level = 1;
      state.isAdmin = false;
    }
  },
 
});

export const { login, logout, setUser } = userSlice.actions;

export default userSlice.reducer;
