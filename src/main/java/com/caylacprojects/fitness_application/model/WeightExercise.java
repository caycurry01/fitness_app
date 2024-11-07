package com.caylacprojects.fitness_application.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import lombok.Data;

@Data
@Entity
@Table(name = "weight_exercise")
public class WeightExercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long weightExerciseId;

    @ManyToOne
    @JoinColumn(name = "exercise_id", nullable = false)
    private Exercise exercise;

    private Integer sets;
    private Integer reps;
    private Double weight;
    private LocalDate exerciseDate;
    private LocalDate createdAt = LocalDate.now();

    // Getters and setters
}