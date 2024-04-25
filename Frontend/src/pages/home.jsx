import React from "react";
import filmApi from "../axios/filmService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/home.css';
import FilmCard from "../component/filmCard";
import Header from "../component/header";

const Home = () => {
    const [film, setFilm] = useState([]);
    const [isSortYear, setIsSortYear] = useState(false);
    const navigate = useNavigate();
    const bodyFilm = {
        title: "",
        year: 0,
        rating: 0,
        genre: null,
        size: 8,
        page: 1,
        sortField: "id",
        sortType: "ASC"
    };
    const getList = async () => {
        try {
            const response = await filmApi.getListFilm(bodyFilm);
            console.log(response.data.content);
            setFilm(response.data.content);
        } catch (error) {
            console.log("error: ", error);
        };
    };

    const handleReset = () => {
        bodyFilm.sortField = "id";
        bodyFilm.sortType = "ASC";
        console.log(bodyFilm.title)
        getList();
    }

    const handleSortByYear = () => {
        if (!isSortYear) {
            bodyFilm.sortField = "year";
            setIsSortYear(true);
            getList();
        } else {
            bodyFilm.sortField = "id";
            bodyFilm.sortType = "ASC";
            setIsSortYear(false);
            getList();
        }
    };

    const handleAddFilm = () => {
        navigate("/addfilm");
    }
    useEffect(() => {
        getList();
    }, []);
    return (
        <>
            <Header />
            <div className="body-container">
                <div class="flex-wrapper">
                    <div class="title-wrapper">
                        <p class="section-subtitle">Ratings</p>
                        <h2 class="h2 section-title">Film List</h2>
                    </div>
                    <ul class="filter-list">
                        <li>
                            <button class="filter-btn" onClick={handleSortByYear}>Year</button>
                        </li>
                        <li>
                            {localStorage.getItem("role") === "ADMIN" ? <button class="filter-btn" onClick={handleAddFilm}>Add Film</button> : null}
                        </li>
                    </ul>
                </div>
                <div className="film-list">{film.map((Object) => <li key={Object.id}><FilmCard image={Object.image} title={Object.title} year={Object.year} rating={Object.rating} /></li>)}</div>
            </div>
        </>
    )
};
export default Home;