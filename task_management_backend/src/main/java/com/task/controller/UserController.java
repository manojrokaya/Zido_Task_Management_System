package com.task.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.entity.User;
import com.task.security.JwtUtil;
import com.task.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController 
{
	@Autowired private UserService userService;
    @Autowired private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        userService.registerUser(user.getUsername(), user.getPassword(), user.getRoles());
        return ResponseEntity.ok("User registered successfully!");
    }

  
}
