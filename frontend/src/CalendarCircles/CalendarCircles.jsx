import React, { useState } from 'react';
import styles from './Calendar.module.css';

const CalendarCircles = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [selectedDate, setSelectedDate] = useState(24);

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className={styles.calendarContainer}>
            <button className={styles.arrowButton}>&lt;</button>
            <div className={styles.days}>
                {daysOfWeek.map((day, index) => (
                    <div
                        key={index}
                        className={`${styles.day} ${selectedDate === 20 + index ? styles.selected : ''}`}
                        onClick={() => handleDateClick(20 + index)}
                    >
                        <span className={styles.dayName}>{day}</span>
                        <span className={styles.dateCircle}>{20 + index}</span>
                    </div>
                ))}
            </div>
            <button className={styles.arrowButton}>&gt;</button>
            <div className={styles.addExercise}>+ Add Exercise</div>
        </div>
    );
};

export default Calendar;
