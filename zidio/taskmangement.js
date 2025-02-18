// Fetch Tasks
const fetchTasks = async () => {
    try {
      const response = await api.get('/api/tasks', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('JWT')}` }
      });
      console.log("Fetched Tasks", response.data);
    } catch (error) {
      console.error("Error fetching tasks", error.response.data);
    }
  };
  
  // Create Task
  const createTask = async (taskData) => {
    try {
      const response = await api.post('/api/tasks', taskData, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('JWT')}` }
      });
      console.log("Task Created", response.data);
    } catch (error) {
      console.error("Error creating task", error.response.data);
    }
  };
  
  // Update Task
  const updateTask = async (taskId, updatedData) => {
    try {
      const response = await api.put(`/api/tasks/${taskId}`, updatedData, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('JWT')}` }
      });
      console.log("Task Updated", response.data);
    } catch (error) {
      console.error("Error updating task", error.response.data);
    }
  };
  
  // Delete Task
  const deleteTask = async (taskId) => {
    try {
      const response = await api.delete(`/api/tasks/${taskId}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('JWT')}` }
      });
      console.log("Task Deleted", response.data);
    } catch (error) {
      console.error("Error deleting task", error.response.data);
    }
  };
  