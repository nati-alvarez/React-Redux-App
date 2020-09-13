import axios from "axios";

export const GET_TOP_ANIME_START = "GET_TOP_ANIME_START";
export const GET_TOP_ANIME_SUCCESS = "GET_TOP_ANIME_SUCCESS";

export const GET_ANIME_START = "GET_ANIME_START";
export const GET_ANIME_SUCCESS = "GET_ANIME_SUCCESS";
export const CLEAR_ANIME = "CLEAR_ANIME";

export const GET_ANIME_EPS_START = "GET_ANIME_EPS_START";
export const GET_ANIME_EPS_SUCCESS = "GET_ANIME_EPS_SUCCESS";

export const GET_SEARCH_RESULTS_START = "GET_SEARCH_RESULTS_START";
export const GET_SEARCH_RESULTS_SUCCESS = 'GET_SEARCH_RESULTS_SUCCESS';
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const getTopAnime = () => dispatch =>{
    dispatch({type: GET_TOP_ANIME_START});
    axios.get("https://api.jikan.moe/v3/top/anime").then(({data})=>{
        dispatch({type: GET_TOP_ANIME_SUCCESS, payload: data.top});
    }).catch(err=>{
        console.log(err);
    })
}

export const getAnime = id => dispatch => {
    dispatch({type: GET_ANIME_START});
    axios.get(`https://api.jikan.moe/v3/anime/${id}`).then(({data})=>{
        dispatch({type: GET_ANIME_SUCCESS, payload: data});
    }).catch(err=>{
        console.log(err);
    });
}

export const clearAnime = () => dispatch =>{
    dispatch({type: CLEAR_ANIME});
}

export const getAnimeEps = id => dispatch => {
    dispatch({type: GET_ANIME_EPS_START});
    axios.get(`https://api.jikan.moe/v3/anime/${id}/episodes`).then(({data})=>{
        dispatch({type: GET_ANIME_EPS_SUCCESS, payload: data});
    }).catch(err=>{
        console.log(err);
    })
}

export const makeSearch = query => dispatch => {
    dispatch({type: GET_SEARCH_RESULTS_START});
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}`).then(({data})=>{
        dispatch({type: GET_SEARCH_RESULTS_SUCCESS, payload: data.results});
    }).catch(err=>{
        console.log(err);
    })
}

export const clearSearchResults = () => dispatch => {
    return dispatch({type: CLEAR_SEARCH_RESULTS});
}