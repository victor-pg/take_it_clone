import React, { useState,useEffect } from 'react';
import axios from 'axios';
import DashboardNav from './DashboardNav/DashboardNav';
import DashboardNewsList from './DashboardNewsList/DashboardNewsList';
import DashboardList from './DashboardList/DashboardList';
import { FormattedMessage } from 'react-intl';

import './Dashboard.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState('false');

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    useEffect(()=>{
        const check = JSON.parse(localStorage.getItem('token'));
        if(!check) return setIsLoggedIn('false');
        if(check) return setIsLoggedIn('true')
    },[])

    const handleSubmit = () => {
        axios.post('/api/auth/login', { username: username, password: password })
            .then(res => {
                localStorage.setItem('token', JSON.stringify(res.data.token));
                setIsLoggedIn('true');
            })
            .catch(err => {
                if (username === '' || password === '') {
                    alert('Completati toate campurile')
                } else {
                    alert('Date gresite')
                }
            })
    }
    const handleLogout = () => {
        axios.post('/api/auth/logout', { username })
            .then(res => {
                localStorage.removeItem('token');
                setIsLoggedIn('false');
            })
            .catch(err => console.log(err));
    }

    if (isLoggedIn === "false") {
        return (
            <div id="dashboard">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username"><FormattedMessage id="username" /></label>
                        <input type="text" name="username" onChange={handleUsername} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><FormattedMessage id="password" /></label>
                        <input type="password" name="password" onChange={handlePassword} />
                    </div>
                    <button className="dashboard-submit-button" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        );
    } else {
        return (
            <div id="dashboard">
                <DashboardNav handleLogout={handleLogout} />
                <DashboardNewsList />
                <DashboardList />
            </div>
        );
    }
}

export default Dashboard;