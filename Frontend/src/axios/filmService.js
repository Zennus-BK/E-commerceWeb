import api from "./axiosClient";

const filmApi = {
    getListFilm(film) {
        return api.post("/film/search",film);
    },
    createFilm(film) {
        return api.post("/film/create",film);
    }
};

export default filmApi;