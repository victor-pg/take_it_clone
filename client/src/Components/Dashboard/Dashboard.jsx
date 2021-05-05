import React, { useState } from 'react';
import axios from 'axios';
import DashboardNav from './DashboardNav/DashboardNav';
import DashboardNewsList from './DashboardNewsList/DashboardNewsList';
import DashboardList from './DashboardList/DashboardList';

import './Dashboard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            })
            .catch(err => alert('Date gresite'))
    }
    const handleLogout = () => {
        axios.post('/api/auth/logout', { username })
            .then(res => {
                localStorage.removeItem('isLoggedIn');
                setIsLoggedIn('false');
            })
            .catch(err => console.log(err));
    }

    if (isLoggedIn==="false") {
        return (
            <div id="dashboard">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Nume de utilizator</label>
                        <input type="text" name="username" onChange={handleUsername} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Parolă</label>
                        <input type="password" name="password" onChange={handlePassword} />
                    </div>
                    <button className="submit-button" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        );
    } else {
        return (
            <div id="dashboard">
                <DashboardNav handleLogout={handleLogout} />
                <DashboardNewsList/>
                <DashboardList/>
            </div>
        );
    }
}

export default Dashboard;