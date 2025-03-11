package com.task.task_service.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.task.task_service.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
	
	public List<Task>  findByAssignedUserId(Long userId);
		
}


