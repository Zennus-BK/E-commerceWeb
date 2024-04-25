import React, { useState } from "react";
import '../styles/login.css'
import { NavLink } from "react-router-dom";
import accountApi from "../axios/accountService";
import { useNavigate, redirect } from "react-router-dom";
import { Alert } from "antd";

const Signin = () => {
    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [avatar, setAvatar] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const navigate = useNavigate();

    const handleFullnameChange = (event) => {
        setFullname(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleAvatarChange = (event) => {
        setAvatar(event.target.value);
    }
    const handleDateOfBirthChange = (event) => {
        setDateOfBirth(event.target.value);
    }
    const handleSignInBtn = async () => {
        const accountSignIn = {
            username: username,
            password: password,
            fullName: fullname,
            dateOfBirth: dateOfBirth,
            email: email,
            avatar: avatar
        };
        try {
            const res = await accountApi.signin(accountSignIn);
            console.log(res.status);
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
                    <div>SIGN IN</div>
                    <NavLink to="/" >Home</NavLink>
                </div>
                <div className="login-body">
                    <input className="input-login" type="text" placeholder="Fullname" value={fullname} onChange={handleFullnameChange} />
                    <input className="input-login" type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
                    <input className="input-login" type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
                    <input className="input-login" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    <input className="input-login" type="text" placeholder="Avatar" value={avatar} onChange={handleAvatarChange} />
                    <input className="input-login" type="text" placeholder="Date of Birth" value={dateOfBirth} onChange={handleDateOfBirthChange} />
                    <button onClick={handleSignInBtn}>Sign in</button>
                </div>
            </div>
        </div>

    )
};

export default Signin;