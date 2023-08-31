import { useState } from 'react';
import '../css/Disabled.css';

const Disabled = () => {
    const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        setDisabled(true);
    }

    return (
        <div>
            <h1>Disabled Button</h1>
            <button disabled={disabled} onClick={handleClick}>
                Submit
            </button>
        </div>
    );
}

export default Disabled;