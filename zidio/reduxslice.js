import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filter: null
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { setTasks, setFilter } = taskSlice.actions;

export default taskSlice.reducer;
