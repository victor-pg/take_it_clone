import React, { useState } from 'react';
import axios from 'axios';

import './Dashboard.scss';

const Dashboard = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') || 'false');

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    const handleSubmit = () => {
        axios.post('/api/auth/login', { username: username, password: password })
            .then(res => {
                localStorage.setItem('isLoggedIn', true);
                setIsLoggedIn('true');
                console.log('on login : ' + isLoggedIn);
            })
            .catch(err => console.log(err))
    }
    const handleLogout = () => {
        axios.post('/api/auth/logout', { username })
            .then(res => {
                localStorage.setItem('isLoggedIn', false);
                setIsLoggedIn('false');
                console.log('on logout : ' + isLoggedIn);
            })
            .catch(err => console.log(err));
    }

    if (isLoggedIn==="false") {
        return (
            <div className="dashboard">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={handleUsername} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={handlePassword} />
                    </div>
                    <button className="submit-button" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="dashboard">
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }
}

export default Dashboard;