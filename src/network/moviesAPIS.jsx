import { axiosInstance } from "./axiosConfig";


export const getMovieDetails = (id) => {
    return axiosInstance
        .get(`/movie/${id}`)
}

export const getMovies = (page) => {
    return axiosInstance
        .get(`/movie/popular?api_key=4ec70b10c20ba7dc5e99b9286ea14306&page=${page}`)
}

export const searchForMovie = (keyword) => {
    return axiosInstance.get(`/search/movie?api_key=4ec70b10c20ba7dc5e99b9286ea14306&query=${keyword}`)
}