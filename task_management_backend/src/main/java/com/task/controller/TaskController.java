package com.task.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.entity.Task;
import com.task.service.TaskService;

@RestController
@RequestMapping("/api/tasks")
public class TaskController 
{
	private final TaskService taskService;
	
	public TaskController(TaskService taskService)
	{
		this.taskService=taskService;
	}
	
	@PostMapping("/create")
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @GetMapping
   public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }
}
