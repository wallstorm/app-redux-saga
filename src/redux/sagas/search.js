import { put, call, takeLatest} from 'redux-saga/effects';
import { SEARCH_MOVIE_START, 
    SEARCH_MOVIE_ERROR, 
    SEARCH_MOVIE_COMPLETE, 
    SEARCH_MOVIE_BY_ID_START, 
    SEARCH_MOVIE_BY_ID_ERROR, 
    SEARCH_MOVIE_BY_ID_COMPLETE 
    } from '../../consts/actionTypes';

import { apiCall } from '../api';

//funcion generadora
//exportamos para ponerlo dentro del watcher y que las sagas
//esten escuchando hacer llamadas
function* searchMovie({ payload }) {
    //intentamosconsumir una api
    try {
        //El call puede ser una funcion normal o generator y te retorna una promesa o un valor normal
        const results = yield call(apiCall, `&s=${payload.movieName}`, null, null, 'GET');
        //El put despacha actions como dispatch
        yield put({ type: SEARCH_MOVIE_COMPLETE, results });
    } catch (error) {
        yield put({ type: SEARCH_MOVIE_ERROR, error });
    }
}

function* searchMovieById({ payload }) {
    try {
        const movie = yield call(apiCall, `&i=${payload.movieId}`, null, null, 'GET');
        yield put({ type: SEARCH_MOVIE_BY_ID_COMPLETE, movie});
    } catch (error) {
        yield put({ type: SEARCH_MOVIE_BY_ID_ERROR, error });
    }
}

export default function* search() {
    //takelatest escucha a search_movie_start
    //y cuando inicie esta accion se lo pasamos a searchMovie
    yield takeLatest(SEARCH_MOVIE_START, searchMovie);
    yield takeLatest(SEARCH_MOVIE_BY_ID_START, searchMovieById);
}
//para que esta saga se este ejecutando esperando a que una 
//accion sea disparada tenemos que importarla dentro de index.js(/sagas)