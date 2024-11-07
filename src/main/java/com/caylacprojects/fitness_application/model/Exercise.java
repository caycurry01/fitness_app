package com.caylacprojects.fitness_application.model;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;


@Data
@Entity
@Table(name = "exercise")
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long exerciseId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private String exerciseName;

    @Column(nullable = false)
    private String exerciseType;  // Should be 'weight' or 'cardio'

    @Column(nullable = false)
    private LocalDate exerciseDate;

    private LocalDate createdAt = LocalDate.now();

    // Getters and setters
}