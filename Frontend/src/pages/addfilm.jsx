import React, { useState } from "react";
import '../styles/addfilm.css';
import filmApi from "../axios/filmService";
import { useNavigate } from "react-router-dom";

const AddFilm = () => {
    const [title, setTitle] = useState();
    const [genre, setGenre] = useState();
    const [image, setImage] = useState();
    const [year, setYear] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };
    const handleImageChange = (event) => {
        setImage(event.target.value);
    };
    const handleYearChange = (event) => {
        setYear(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
    const handleSumbit = async () => {
        const bodyAddFilm = {
            title: title,
            image: image,
            year: year,
            description: description,
            genre: genre
        }
        try {
            if (bodyAddFilm.title.length > 15 || bodyAddFilm.title.length < 10) {
                return window.alert("Title phải nhiều hơn 10 kí tự và ít hơn 15 kí tự")
            };
            const response = await filmApi.createFilm(bodyAddFilm);
            console.log(response);
            if (response.status == 200) {
                window.alert("Thêm phim thành công!")
            }
        } catch (error) {
            console.log("error", error);
        }
    }
    const handleCancel = () => {
        navigate("/")
    }
    return (
        <div className="addFilm-cover">
            <div className="addFlim-container">
                <label>Title</label>
                <input type="text" placeholder="Enter film title..." id="title" value={title} onChange={handleTitleChange} />
                <label>Genre</label>
                <select id="genre" value={genre} onChange={handleGenreChange}>
                    <option>ACTION</option>
                    <option>ADVENTURE</option>
                    <option>COMEDY</option>
                    <option>DRAMA</option>
                </select>
                <label>Image</label>
                <input type="text" placeholder="Enter image link..." id="image" value={image} onChange={handleImageChange} />
                <label>Year</label>
                <input type="number" placeholder="Enter year..." id="year" value={year} onChange={handleYearChange} />
                <label>Description</label>
                <input type="text" placeholder="Enter film Description..." id="description" value={description} onChange={handleDescriptionChange} />
                <div className="action">
                    <button onClick={handleSumbit}>Submit</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>

            </div>
        </div>

    )
};

export default AddFilm;