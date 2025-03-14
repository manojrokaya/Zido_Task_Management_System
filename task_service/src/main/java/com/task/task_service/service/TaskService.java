package com.task.task_service.service;

import java.util.List;

import com.task.task_service.entity.Task;
import com.task.task_service.status.TaskStatus;

public interface TaskService 
{
	Task createTask(Task task, String requestRole) throws Exception;
	
	Task getTaskById(Long id) throws Exception;
	
	List<Task> getAllTasks(TaskStatus status);
	
	Task updateTask(Long id , Task updatedTask, Long userId) throws Exception;
	
	void deleteTask(Long id) throws Exception;
	
	Task  assignedToUser(Long userId, Long taskId) throws Exception;
	
	List<Task> assignedUsersTask(Long userId, TaskStatus status);
	
	Task completeTask(Long taskId) throws Exception;
}