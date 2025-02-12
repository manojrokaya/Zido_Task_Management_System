package com.task.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.task.entity.Task;
import com.task.entity.User;


import com.task.service.TaskServices;
import com.task.service.UserServices;
import com.task.status.TaskStatus;

@RestController
@RequestMapping("/tasks")
public class TaskController {
	@Autowired
    private TaskServices taskServices;
	
	@Autowired 
	private UserServices userServices;
    
	@PostMapping
   public ResponseEntity<Task> createTask(@RequestBody Task task, @RequestHeader("Authorization") String jwt) throws Exception
   {
	   User user = userServices.getUserProfile(jwt);
	   Task cratedTask = taskServices.createTask(task, user.getRole());
	   return new ResponseEntity<>(cratedTask, HttpStatus.CREATED);
   }
	
	@GetMapping("/{id}")
	   public ResponseEntity<Task> getTaskById(@PathVariable Long id,@RequestHeader("Authorization") String jwt) throws Exception
	   {
		   User user = userServices.getUserProfile(jwt);
		   Task task = taskServices.getTaskById(id);
		   return new ResponseEntity<>(task, HttpStatus.OK);
	   }
	
	@GetMapping("/user")
	   public ResponseEntity<List<Task>> getAssignedUsersTask(@RequestParam(required=false) TaskStatus status,@RequestHeader("Authorization") String jwt) throws Exception
	   {
		   User user = userServices.getUserProfile(jwt);
		   List<Task> tasks = taskServices.assignedUsersTask(user.getId(), status);

		   return new ResponseEntity<>(tasks, HttpStatus.OK);
	   }
	
	@GetMapping()
	   public ResponseEntity<List<Task>> getAllTask(@RequestParam(required=false) TaskStatus status,@RequestHeader("Authorization") String jwt) throws Exception
	   {
		   User user = userServices.getUserProfile(jwt);
		   List<Task> tasks = taskServices.getAllTasks(status);

		   return new ResponseEntity<>(tasks, HttpStatus.OK);
	   }
	
	@PutMapping("/user{id}/assigned")
	   public ResponseEntity<Task> assignedTaskToUser(@PathVariable Long id, @PathVariable Long userId,@RequestHeader("Authorization") String jwt) throws Exception
	   {
		   User user = userServices.getUserProfile(jwt);
		   Task tasks = taskServices.assignedToUser(userId, id);

		   return new ResponseEntity<>(tasks, HttpStatus.OK);
	   }
	
	@PutMapping("{id}")
	   public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task req,@RequestHeader("Authorization") String jwt) throws Exception
	   {
		   User user = userServices.getUserProfile(jwt);
		   Task tasks = taskServices.updateTask(id, req, user.getId());

		   return new ResponseEntity<>(tasks, HttpStatus.OK);
	   }
	
	@PutMapping("{id}/complete")
	   public ResponseEntity<Task> completeTask(@PathVariable Long id) throws Exception
	   {
		  
		   Task tasks = taskServices.completeTask(id);

		   return new ResponseEntity<>(tasks, HttpStatus.OK);
	   }
	
	@DeleteMapping ("{id}")
	   public ResponseEntity<Void> deleteTask(@PathVariable Long id) throws Exception
	   {
		  
		   taskServices.deleteTask(id);

		   return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	   }
	
	
	
	
    
}


