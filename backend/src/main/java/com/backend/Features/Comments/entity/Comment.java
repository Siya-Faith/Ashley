package com.backend.Features.Comments.entity;

import com.backend.Features.Stragetic_Plans.entity.StrategicPlan;
import com.backend.User.entities.User;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plan_id", nullable = false)
    private StrategicPlan plan;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(name = "created_time", columnDefinition = "TIMESTAMP")
    private LocalDateTime createdTime = LocalDateTime.now();

    // Constructors

    public Comment() {
    }

    public Comment(Integer id, User user, StrategicPlan plan, String content, LocalDateTime createdTime) {
        this.id = id;
        this.user = user;
        this.plan = plan;
        this.content = content;
        this.createdTime = createdTime;
    }

    // Getters and Setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public StrategicPlan getPlan() {
        return plan;
    }

    public void setPlan(StrategicPlan plan) {
        this.plan = plan;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(LocalDateTime createdTime) {
        this.createdTime = createdTime;
    }
}

