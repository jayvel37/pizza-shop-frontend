import "./SignUpPage.css";
import React, { useState } from 'react';
import ToppingPage from "../toppings/ToppingPage";
import AdminPage from "../adminPage/AdminPage";
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';

const SignUpPageReturn = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/admin" element={<AdminPage />} />
                <Route exact path="/toppings" element={<ToppingPage />} />
                <Route exact path="/" element={<SignUpPage />} />
            </Routes>
        </Router>
    );
};

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectPath, setRedirectPath] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Simulate login process
        if (email === 'admin@pizzas.com' && password === 'adminPassword') {
            // Set redirect path to admin page
            setRedirectPath('/admin');
        } else if (email === 'chef@pizzas.com' && password === 'pizzaPassword') {
            // Set redirect path to toppings page
            setRedirectPath('/toppings');
        } else {
            // Handle invalid login
            alert('Invalid email or password');
        }
    };

    // Redirect if redirect path is set
    if (redirectPath) {
        return <Navigate to={redirectPath} />;
    }

    return (
        <div>
            <h2 className="header">Login</h2>
            <div className="formWrapper">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPageReturn;
