package com.task.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import com.task.config.JwtProvider;
import com.task.entity.User;
import com.task.reponse.AuthResponse;
import com.task.repository.UserRepository;
import com.task.request.LoginRequest;
import com.task.service.UserService;

@RestController
@RequestMapping("/auth")
public class AuthController
{
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/signup")
	public ResponseEntity<AuthResponse>  createUserHandler(@RequestBody User user) throws Exception
	{
		String email = user.getEmail();
		String password = user.getPassword();
		String fullName = user.getFullName();
		String role = user.getRole();
		
		User isEmailExist = userRepository.findByEmail(email);
		if(isEmailExist !=null)
		{
			throw new Exception("Email is  already 	used in another account");
		}
		//create a user
		User createUser = new User();
		createUser.setEmail(email);
		createUser.setFullName(fullName);
		createUser.setRole(role);
		createUser.setPassword(passwordEncoder.encode(password));
		
		User savedUser = userRepository.save(createUser);
		 
		Authentication authentication = new UsernamePasswordAuthenticationToken(email, password);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String token = JwtProvider.generateToken(authentication);
		
		AuthResponse authResponse = new AuthResponse();
		authResponse.setJwt(token);
		authResponse.setMessage("Register Success");
		authResponse.setStatus(true);
		
		return new ResponseEntity<>(authResponse, HttpStatus.OK);
	}
	
	@PostMapping("/signin")
	public ResponseEntity<AuthResponse> Sigin(@RequestBody  LoginRequest loginRequest)
	{
		String username = loginRequest.getEmail();
		String password = loginRequest.getPassword();
		
		System.out.println(username+"----------"+password);
		
		Authentication authentication =  authenticate(username, password);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String token = JwtProvider.generateToken(authentication);
		
		AuthResponse authResponse = new AuthResponse();
		authResponse.setMessage("Login Success");
		authResponse.setJwt(token);
		authResponse.setStatus(true);
		
		
		return new ResponseEntity<>(authResponse, HttpStatus.OK);
	}
	
	private Authentication authenticate(String username, String password)
	{
		UserDetails userDetails = userService.loadUserByUsername(username);
		System.out.println("Sigin in UserDetails.-"+userDetails);
		
		if(userDetails ==null)
		{
			System.out.println("Sigin in userDetails -"+userDetails);
			throw new BadCredentialsException("Invalid usernmae or password");
		}
		if(!passwordEncoder.matches(password, userDetails.getPassword()))
		{
			System.out.println("Sign in userDetails -password not match"+userDetails);
			throw new BadCredentialsException("Inavlid username or password");
		}
		
		return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
	}
	
}