package com.zosh.task_submission_service.modal;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TaskDto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;

    private String description;

    private String image;

    private Long assignedUserId;

    private List<String> tags=new ArrayList<>();

    private TaskStatus ststus;

    private LocalDateTime deadline;

    private LocalDateTime createdAt;



}
