package com.zosh.task_submission_service.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import com.zosh.task_submission_service.modal.TaskDto;

@FeignClient(name="task-service", url="http://localhost:8988/")
public interface TaskService {

    @GetMapping("/api/tasks/{id}")
    public TaskDto getTaskById(
            @PathVariable Long id,
            @RequestHeader("Authorization") String jwt) throws Exception;

    @PutMapping("/api/tasks/{id}/complete")
    public TaskDto completeTask(
            @PathVariable Long id) throws Exception;
}
