const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
      tasks: [],
      loading: false,
      error: null
    },
    reducers: {
      fetchTasksPending: (state) => {
        state.loading = true;
        state.error = null;
      },
      fetchTasksFulfilled: (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      },
      fetchTasksRejected: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      createTaskPending: (state) => {
        state.loading = true;
      },
      createTaskFulfilled: (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      },
      createTaskRejected: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    }
  });
  
  export const {
    fetchTasksPending,
    fetchTasksFulfilled,
    fetchTasksRejected,
    createTaskPending,
    createTaskFulfilled,
    createTaskRejected
  } = taskSlice.actions;
  
  export default taskSlice.reducer;
  