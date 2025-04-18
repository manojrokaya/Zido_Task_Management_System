package com.task.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.entity.User;
import com.task.service.UserServices;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private UserServices userServices;
	
	@GetMapping("/profile")
	public ResponseEntity<User>  getUserProfile(@RequestHeader("Authorization") String jwt)
	{
		User user = userServices.getUserProfile(jwt);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
	
	@GetMapping("/")
	public ResponseEntity<List<User>> getUsers(@RequestHeader("Au thorization") String jwt) {
		List<User> user = userServices.getAllUsers();
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
	
}
