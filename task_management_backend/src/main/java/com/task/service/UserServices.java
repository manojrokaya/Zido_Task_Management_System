package com.task.service;

import java.util.List;

import com.task.entity.User;

public interface UserServices {
	public User getUserProfile(String jwt);
	public List<User> getAllUsers();
}
