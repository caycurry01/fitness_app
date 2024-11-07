import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <div style={styles.links}>
                <a href="/privacy" style={styles.link}>Privacy Policy</a>
                <span style={styles.separator}>|</span>
                <a href="/terms" style={styles.link}>Terms of Service</a>
                <span style={styles.separator}>|</span>
                <a href="/contact" style={styles.link}>Contact Us</a>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
    },
    text: {
        margin: 0,
        fontSize: '14px',
    },
    links: {
        marginTop: '10px',
        fontSize: '14px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 5px',
    },
    separator: {
        margin: '0 3px',
    },
};

export default Footer;
