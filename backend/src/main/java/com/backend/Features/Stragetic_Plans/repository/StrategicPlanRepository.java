package com.backend.Features.Stragetic_Plans.repository;

import com.backend.Features.Stragetic_Plans.entity.StrategicPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface StrategicPlanRepository extends JpaRepository<StrategicPlan, Integer> {

    List<StrategicPlan> findByWard_Id(Integer wardId);

    List<StrategicPlan> findByCreatedBy_Id(Integer userId);

    List<StrategicPlan> findByCategory(StrategicPlan.Category category);
}
