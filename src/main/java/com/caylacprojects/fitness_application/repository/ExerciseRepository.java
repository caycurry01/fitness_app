package com.caylacprojects.fitness_application.repository;


import com.caylacprojects.fitness_application.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
}