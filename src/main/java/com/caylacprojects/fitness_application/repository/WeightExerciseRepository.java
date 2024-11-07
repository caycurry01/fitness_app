package com.caylacprojects.fitness_application.repository;

import com.caylacprojects.fitness_application.model.WeightExercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WeightExerciseRepository extends JpaRepository<WeightExercise, Long> {
}