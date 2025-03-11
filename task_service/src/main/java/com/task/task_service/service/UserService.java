package com.task.task_service.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import com.task.task_service.dto.UserDto;

@FeignClient(name="task_user_service" , url="http://localhost:8987")
public interface UserService 
{
	@GetMapping("api/user/profile")
	public UserDto getUserProfile(@RequestHeader("Authorize") String jwt);
}
