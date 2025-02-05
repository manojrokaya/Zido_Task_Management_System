package com.task.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.task.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);
}
