package com.task.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.task.status.TaskStatus;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tasks")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;
    private String description;
    private String image;
    private Long assignedUserId;
    private List<String> tags = new ArrayList<>();
    
    private TaskStatus Status;
    private LocalDateTime deadline;
    private LocalDateTime createdAt;
}
