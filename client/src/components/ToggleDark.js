import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

export const ToggleDark = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <div className="toggle-dark" data-testid="toggle-app">
            <button onClick={toggleMode} 
                    className={darkMode ? 'toggle toggled' : 'toggle'} data-testid="dark-toggled">
                        Toggle Dark Mode</button>
        </div>
    );
};
