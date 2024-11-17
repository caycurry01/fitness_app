import React, { useState } from 'react';
import styles from './ExerciseScroll.module.css';

function ExerciseScroll() {
    const [exercises, setExercises] = useState([
        {
            name: "Bench Press",
            sets: "5",
            weight: "145 lbs",
            details: [
                { set: 1, weight: "100 lb", reps: 8 },
                { set: 2, weight: "100 lb", reps: 6 },
                { set: 3, weight: "100 lb", reps: 7 },
                { set: 4, weight: "100 lb", reps: 8 },
            ],
        },
        {
            name: "Run",
            duration: "7:30 min/mi",
            distance: "3 mi",
            details: [
                { type: "Duration", value: "7:30 min/mi" },
                { type: "Distance", value: "3 miles" },
            ],
        },
    ]);

    const [selectedExercise, setSelectedExercise] = useState(null);

    const addExercise = () => {
        const newExercise = {
            name: "New Exercise",
            sets: "-",
            weight: "-",
            details: [],
        };
        setExercises((prevExercises) => [...prevExercises, newExercise]);
    };

    const openModal = (exercise) => {
        setSelectedExercise(exercise);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setSelectedExercise(null);
        document.body.style.overflow = 'auto'; // Re-enable background scrolling
    };

    return (
        <div className={styles.exerciseScroll}>
            {/* Exercise List */}
            {exercises.map((exercise, index) => (
                <div
                    key={index}
                    className={styles.exerciseItem}
                    onClick={() => openModal(exercise)}
                >
                    <div className={styles.exerciseHeader}>
                        <span>{exercise.name}</span>
                        {exercise.sets && exercise.weight && (
                            <span>{exercise.sets} sets | {exercise.weight}</span>
                        )}
                        {exercise.duration && exercise.distance && (
                            <span>{exercise.duration} | {exercise.distance}</span>
                        )}
                    </div>
                </div>
            ))}
            <div className={styles.addButton} onClick={addExercise}>
                + Add Exercise
            </div>

            {/* Modal for Exercise Details */}
            {selectedExercise && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
                    >
                        <div className={styles.modalHeader}>
                            <h2>{selectedExercise.name}</h2>
                            <button className={styles.closeButton} onClick={closeModal}>
                                ✕
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            {selectedExercise.details.length > 0 ? (
                                selectedExercise.details.map((detail, idx) => (
                                    <p key={idx}>
                                        {detail.set
                                            ? `Set ${detail.set}: ${detail.weight} x ${detail.reps} reps`
                                            : `${detail.type}: ${detail.value}`}
                                    </p>
                                ))
                            ) : (
                                <p>No details available</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExerciseScroll;
