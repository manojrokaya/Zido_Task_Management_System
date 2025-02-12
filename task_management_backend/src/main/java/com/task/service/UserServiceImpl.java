package com.task.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.config.JwtProvider;
import com.task.entity.User;
import com.task.repository.UserRepository;

@Service
public class UserServiceImpl implements UserServices{
	
	@Autowired
	private UserRepository userRepository;
	@Override
	public User getUserProfile(String jwt) {
		// TODO Auto-generated method stub
		String email = JwtProvider.getEmailFromJwtToken(jwt);
		
		return userRepository.findByEmail(email);
	}
	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

}
