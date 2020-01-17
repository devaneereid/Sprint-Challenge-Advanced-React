import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import styled from 'styled-components';

const Button = styled.button`
    padding: 15px 60px;
    border-radius: 20px;
    font-size: 1.2rem;
    background: aqua;
    font-family: monospace;
`;

export const ToggleDark = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <div className="toggle-dark" data-testid="toggle-app">
            <Button onClick={toggleMode} 
                    className={darkMode ? 'toggle toggled' : 'toggle'} data-testid="dark-toggled">
                        Toggle Dark Mode</Button>
        </div>
    );
};
