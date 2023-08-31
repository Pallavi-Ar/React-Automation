import { useState } from "react";
import '../css/Mode.css';

export default function Mode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };
    
    return (
        <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>  
            <button onClick={toggleMode}>
                Change Theme
            </button>
        </div>
    );
}