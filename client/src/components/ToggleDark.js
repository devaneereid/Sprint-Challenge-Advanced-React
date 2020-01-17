import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

export const ToggleDark = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <div className="toggle-dark">
            <button onClick={toggleMode} 
                    className={darkMode ? 'toggle toggled' : 'toggle'}>
                        Toggle Dark Mode</button>
        </div>
    );
};
