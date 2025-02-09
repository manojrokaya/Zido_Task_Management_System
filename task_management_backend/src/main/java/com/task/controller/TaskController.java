package com.task.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.entity.Task;
import com.task.entity.User;

import com.task.service.TaskService;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    private TaskService taskService;
    
    public TaskController(TaskService taskService) {
        this.taskService = taskService;

    }

    @PostMapping("/create")
    public ResponseEntity<?> createTask(@RequestBody Task task) {
        return ResponseEntity.ok(taskService.createTask(task));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUserTasks(@PathVariable Long userId) {
        User user = new User();
        user.setId(userId);
        return ResponseEntity.ok(taskService.getTasksByUser(user));
    }
}


