package com.zosh.task_submission_service.service;

import com.zosh.task_submission_service.modal.Submission;

import java.util.List;

public interface SubmissionService {
    Submission submitTask(Long taskId, String githubLink, Long userId, String jwt)throws Exception;

    Submission getTasksSubmissionById(Long submissionId)throws Exception;

    List<Submission> getAllTaskSubmission();

    List<Submission> getTaskSubmissionByTaskId(Long TaskId);

    Submission acceptDeclineSubmission(Long id,String status)throws Exception;
}
