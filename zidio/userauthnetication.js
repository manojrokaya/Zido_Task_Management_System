import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loggedIn: false,
    loading: false,
    error: null,
    JWT: null,
    userList: []
  },
  reducers: {
    loginPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginFulfilled: (state, action) => {
      state.loading = false;
      state.JWT = action.payload.token;
      state.loggedIn = true;
      state.user = action.payload.user;
    },
    loginRejected: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    registerPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerFulfilled: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.loggedIn = true;
    },
    registerRejected: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.JWT = null;
      state.loggedIn = false;
      state.error = null;
    }
  }
});

export const {
  loginPending,
  loginFulfilled,
  loginRejected,
  registerPending,
  registerFulfilled,
  registerRejected,
  logout
} = authSlice.actions;

export default authSlice.reducer;
