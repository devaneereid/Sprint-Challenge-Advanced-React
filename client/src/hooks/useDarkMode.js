import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = () => {
    const [values, setValues] = useLocalStorage('dark mode', true);

    useEffect(() => {
        const darkMode = document.querySelector('body');
        if(values === false) {
            darkMode.classList.add('dark-mode')
        } else {
            darkMode.classList.remove('dark-mode')
        }
    }, [values])

    return [values, setValues];
};