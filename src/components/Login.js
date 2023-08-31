import '../css/Login.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[invalidCredentials, setInvalidCredentials] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        if ((email == "automate@gmail.com") && (password == "automate10")) {
            navigate('/layout');
        }
        else {
            setInvalidCredentials(true);
        }
    };

    return (
        <div>
            <fieldset>
            <h2 id="login-text">Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input id="input2"s
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit" id="login-btn">Login</button>
            </form>
            {invalidCredentials && <p id="invalid">Invalid credentials!</p>}
            </fieldset>
            <h3 id="cred">Credentials to be used : </h3>
            <p class="email-pass">Email - automate@gmail.com</p>
            <p class="email-pass">Password - automate10</p>
        </div>
    );
}
