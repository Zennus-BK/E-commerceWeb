import { React, useState } from "react";
import "../styles/header.css"
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
import { Tooltip, Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';
const Header = () => {
    const [titleSearch, setTitleSearch] = useState();
    const handleTitleSearchChange = (event) => {
        setTitleSearch(event.target.value);
    };
    const handleSearchButton = () => {
        bodyFilm.title = titleSearch;
        getList();
    }
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }
    return (
        <div className="header-container">
            <img className="logo" src={logo} />
            <div className="navbar-menu">
                <NavLink className="navbar-link" to="/">Home</NavLink>
                {localStorage.getItem("token") == null ?
                    <>
                        <NavLink className="navbar-link" to="/login">Đăng nhập</NavLink>
                        <NavLink className="navbar-link" to="/signin">Đăng ký</NavLink>
                    </>
                    : <NavLink className="navbar-link" onClick={handleLogout}>Đăng xuất</NavLink>}
            </div>
            <div className="search-box">
                <input className="input-search" type="text" placeholder="Tìm phim" value={titleSearch} onChange={handleTitleSearchChange} />
                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined />} onClick={handleSearchButton} />
                </Tooltip>
            </div>
        </div>
    )
}

export default Header;