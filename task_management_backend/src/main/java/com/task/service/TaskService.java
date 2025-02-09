package com.task.service;

import org.springframework.stereotype.Service;

import com.task.entity.Task;
import com.task.entity.User;
import com.task.repository.TaskRepository;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getTasksByUser(User user) {
        return taskRepository.findByAssignedUser(user);
    }
}
