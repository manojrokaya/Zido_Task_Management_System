package com.task.task_service.serviceimpl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.task.task_service.entity.Task;
import com.task.task_service.repository.TaskRepository;
import com.task.task_service.service.TaskService;
import com.task.task_service.status.TaskStatus;

@Service
public class TaskServiceImpl implements TaskService {  
	
	@Autowired
	private TaskRepository taskRepository;

	@Override
	public Task createTask(Task task, String requestRole) throws Exception {
		// TODO Auto-generated method stub
		if(!requestRole.equals(("ROLE_ADMIN")))
		{
			throw new Exception("only admin can create task");
		}
		task.setStatus(TaskStatus.PENDING);
		task.setCreatedAt(LocalDateTime.now());
		return taskRepository.save(task);
	}

	@Override
	public Task getTaskById(Long id) throws Exception {
		// TODO Auto-generated method stub
		return taskRepository.findById(id).orElseThrow(()->new Exception("task not found with id"+id));
	}

	@Override
	public List<Task> getAllTasks(TaskStatus status) {
		// TODO Auto-generated method stub
		List<Task> allTask = taskRepository.findAll();
		
		List<Task> filteredTasks = allTask.stream().filter(
														task-> status==null || task.getStatus().name().equalsIgnoreCase(status.toString())).collect(Collectors.toList());
		return filteredTasks;
	}

	@Override
	public Task updateTask(Long id, Task updatedTask, Long userId) throws Exception {
		// TODO Auto-generated method stub
		Task existingTask = getTaskById(id);
		if(updatedTask.getTitle()!=null)
		{
			existingTask.setTitle(updatedTask.getTitle());
		}
		if(updatedTask.getImage()!=null)
		{
			existingTask.setImage(updatedTask.getImage());
		}
		if(updatedTask.getDescription()!=null)
		{
			existingTask.setDescription(updatedTask.getDescription());
		}
		if(updatedTask.getStatus()!=null)
		{
			existingTask.setStatus(updatedTask.getStatus());
		}
		if(updatedTask.getDeadline()!=null)
		{
			existingTask.setDeadline(updatedTask.getDeadline());
		}
		
		return taskRepository.save(existingTask);
	}

	@Override 
	public void deleteTask(Long id) throws Exception{
		// TODO Auto-generated method stub
		getTaskById(id);
		
		taskRepository.deleteById(id);
		
	}

	@Override
	public Task assignedToUser(Long userId, Long taskId) throws Exception {
		// TODO Auto-generated method stub
		Task task =  getTaskById(taskId);
		task.setAssignedUserId(userId);
		task.setStatus(TaskStatus.DONE);
		
		return taskRepository.save(task);
	}

	@Override
	public List<Task> assignedUsersTask(Long userId, TaskStatus status) {
		// TODO Auto-generated method stub
		List<Task> allTasks = taskRepository.findByAssignedUserId(userId);
		List<Task> filteredTasks = allTasks.stream().filter(
				task-> status==null || task.getStatus().name().equalsIgnoreCase(status.toString())).collect(Collectors.toList());
		 
		return filteredTasks;
	}

	@Override
	public Task completeTask(Long taskId) throws Exception {
		// TODO Auto-generated method stub
		Task task = getTaskById(taskId);
		task.setStatus(TaskStatus.DONE);
		return taskRepository.save(task);
	}

}