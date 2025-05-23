package com.backend.Features.Issues.repository;

import com.backend.Features.Issues.entity.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Integer> {

    List<Issue> findByUser_Id(Integer userId);

    List<Issue> findByWard_Id(Integer wardId);

    List<Issue> findByStatus(String status);
}

