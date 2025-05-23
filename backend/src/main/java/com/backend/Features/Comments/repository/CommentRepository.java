package com.backend.Features.Comments.repository;

import com.backend.Features.Comments.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {

    List<Comment> findByPlan_Id(Integer planId);

    List<Comment> findByUser_Id(Integer userId);
}

