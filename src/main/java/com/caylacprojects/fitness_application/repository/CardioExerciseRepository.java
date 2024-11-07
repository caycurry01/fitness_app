package com.caylacprojects.fitness_application.repository;

import com.caylacprojects.fitness_application.model.CardioExercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardioExerciseRepository extends JpaRepository<CardioExercise, Long> {
}