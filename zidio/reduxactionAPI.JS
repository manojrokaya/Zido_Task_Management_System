import { setTasks } from './taskSlice';
import api from '../api';

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await api.get('/tasks');
    dispatch(setTasks(response.data));
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};
