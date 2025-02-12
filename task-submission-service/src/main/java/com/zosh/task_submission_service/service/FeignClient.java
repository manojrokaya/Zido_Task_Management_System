package com.zosh.task_submission_service.service;

public @interface FeignClient {
    String name();

    String url();
}
