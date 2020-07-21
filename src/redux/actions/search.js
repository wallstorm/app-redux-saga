import { SEARCH_MOVIE_START, SEARCH_MOVIE_BY_ID_START } from '../../consts/actionTypes';

//Inicializa una acción
export const searchMovie = payload => ({
    type: SEARCH_MOVIE_START,
    payload
});

export const searchMovieById = payload => ({
    type: SEARCH_MOVIE_BY_ID_START,
    payload
});