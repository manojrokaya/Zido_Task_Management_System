import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import submissionReducer from './submissionSlice';

const store = configureStore({
  reducer: {
    task: taskReducer,
    submission: submissionReducer,
  }
});

export default store;
