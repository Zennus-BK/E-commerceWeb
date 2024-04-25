import React, { useState } from "react";
import '../styles/login.css'
import { NavLink } from "react-router-dom";
import accountApi from "../axios/accountService";
import { useNavigate, redirect } from "react-router-dom";
import { Alert } from "antd";

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleLogInBtn = async () => {
        const account = {
            username: username,
            password: password
        };
        try {
            const res = await accountApi.login(account);
            console.log(res.status);
            localStorage.setItem("fullName", res.data.fullName);
            localStorage.setItem("avatar", res.data.avatar);
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.username);
            if (res.status == 200) {
                return navigate("/");
            }
        } catch (error) {
            window.alert(error.response.data.message);
        }
    }

    return (
        <div className="login-cover">
            <div className="login-container">
                <div className="login-header">
                    <div>LOG IN</div>
                    <NavLink to="/" >Home</NavLink>
                </div>
                <div className="login-body">
                    <input className="input-login" type="text" placeholder="Username" value={username} onChange={handleUsernameChange}/>
                    <input className="input-login" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    <button onClick={handleLogInBtn}>Log in</button>
                </div>
            </div>
        </div>
        
    )
};

export default Login;