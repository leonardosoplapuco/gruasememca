import React, { useEffect } from 'react';

const DarkButton = () => {
    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleDarkMode = () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');

        if (isDarkMode){
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    };

    return (
        <button type="button" id="dark-button" className="button-icon dark-button margin-left" onClick={toggleDarkMode}>
            <span className="material-symbols-outlined">bedtime</span>
            <span className="material-symbols-outlined">light_mode</span>
        </button>
    );
};

export default DarkButton;