import React, { useState } from 'react';
import './LoginCard.css';

const LoginCard = ({ users }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(
            (u) => u.email === form.email && u.password === form.password
        );

        if (user) {
            alert(`You are logged in, ${user.name}`);
        } else {
            alert('Please enter correct details');
        }
    };

    return (

        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>


                <div className="user-box">
                    <input
                        type="email"
                        id="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="Email">Email</label>
                </div>

                <div className="user-box">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password">Password</label>
                </div>

                <button type="submit" className="submit-button">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </button>


            </form>
        </div>

    );
};

export default LoginCard;

