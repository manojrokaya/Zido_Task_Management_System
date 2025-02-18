import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, fetchUserTasks } from './taskSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, userTasks, loading, error } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchUserTasks());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      <h2>All Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>

      <h2>User Tasks</h2>
      <ul>
        {userTasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
