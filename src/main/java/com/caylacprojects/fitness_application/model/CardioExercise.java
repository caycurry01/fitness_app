package com.caylacprojects.fitness_application.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "cardio_exercise")
public class CardioExercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cardioExerciseId;

    @ManyToOne
    @JoinColumn(name = "exercise_id", nullable = false)
    private Exercise exercise;

    private Integer duration;
    private Double distance;
    private LocalDate exerciseDate;
    private LocalDate createdAt = LocalDate.now();

    // Getters and setters

}