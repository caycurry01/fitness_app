import React from 'react';
import styles from './HelloMessage.module.css';

function HelloMessage({ name }) {
    return (
        <div className={styles.messageContainer}>
            <h1 className={styles.greeting}>Hi {name}!</h1>
            <p className={styles.subGreeting}>Welcome Back</p>
        </div>
    );
}

export default HelloMessage;
