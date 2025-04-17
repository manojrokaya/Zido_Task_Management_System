package com.task.task_service.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import com.task.task_service.dto.UserDto;

@FeignClient(name="user-service" , url="http://localhost:8761")
public interface UserService 
{
	@GetMapping("api/user/profile")
	public UserDto getUserProfile(@RequestHeader("Authorize") String jwt);
}
