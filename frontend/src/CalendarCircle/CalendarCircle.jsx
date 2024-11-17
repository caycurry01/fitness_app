import React, { useState } from 'react';
import styles from './CalendarCircle.module.css';

const CalendarCircle = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [selectedDate, setSelectedDate] = useState(24);

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className={styles.calendarContainer}>
            <button className={styles.arrowButton}>&lt;</button>
            <div className={styles.scrollableDates}>
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

        </div>
    );
};

export default CalendarCircle;
