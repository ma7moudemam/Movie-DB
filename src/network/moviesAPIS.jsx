import { axiosInstance } from "./axiosConfig";


export const gerMovieDetails = (id) => {
    return axiosInstance
        .get(`/movie/${id}`)
}

export const getMovie = () => {
    return axiosInstance
        .get(`/movie/popular`)
}