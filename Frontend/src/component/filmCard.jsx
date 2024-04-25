import React from "react";

const FilmCard = (props) => {
    const handleDelete = (key) => {

        console.log(key);
    }
    return (
        <>
            <div class="film-card">
                <figure class="card-banner">
                    <img src={props.image} alt="The Northman movie poster" />
                </figure>
                <div class="title-wrapper">
                    <h3 class="card-title">
                        {props.title}
                    </h3>
                    <time datetime="2022">{props.year}</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">HD</div>
                    <div class="duration">
                        <time datetime="PT137M">120 min</time>
                    </div>
                    <div class="rating">
                        <data>{props.rating}</data>
                    </div>
                </div>
                <div className="admin-action">
                    {localStorage.getItem("role") === "ADMIN" ? <button className="admin-btn">Update</button> : null}
                    {localStorage.getItem("role") === "ADMIN" ? <button className="admin-btn" onClick={handleDelete(props.key)}>Delete</button> : null}
                </div>
            </div>
        </>

    )
}

export default FilmCard;