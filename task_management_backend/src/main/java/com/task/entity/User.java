package com.task.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.Set;
@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String password;
    private String email;
    private String role;

    
}
