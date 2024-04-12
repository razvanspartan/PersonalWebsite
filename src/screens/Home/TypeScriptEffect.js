import React, { useState, useEffect } from 'react';
import '../About/About.css'
const TypingText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex === text.length) {
                clearInterval(interval);
            } else {
                setDisplayText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }
        }, 100); // Adjust typing speed here

        return () => clearInterval(interval);
    }, [currentIndex, text]);

    return <span className={className}>{displayText}</span>;
};
export default TypingText;