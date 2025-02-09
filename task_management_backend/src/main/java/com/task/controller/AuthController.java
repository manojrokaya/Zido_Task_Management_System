//package com.task.controller;
//
//import java.util.Map;
//
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.task.service.UserService;
//
//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//    private final UserService userService;
//
//    public AuthController(UserService userService) {
//        this.userService = userService;
//    }
//
//    @PostMapping("/login")
//    public Map<String, String> login(@RequestBody Map<String, String> request) {
//        String token = userService.authenticateUser(request.get("username"), request.get("password"));
//        return Map.of("token", token);
//    }
//}
