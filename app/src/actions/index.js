import axios from "axios";

export const GET_TOP_ANIME_START = "GET_TOP_ANIME_START";
export const GET_TOP_ANIME_SUCCESS = "GET_TOP_ANIME_SUCCESS";

export const GET_ANIME_START = "GET_ANIME_START";
export const GET_ANIME_SUCCESS = "GET_ANIME_SUCCESS";

export const GET_ANIME_EPS_START = "GET_ANIME_EPS_START";
export const GET_ANIME_EPS_SUCCESS = "GET_ANIME_EPS_SUCCESS";

export const getTopAnime = () => dispatch =>{
    dispatch({type: GET_TOP_ANIME_START});
    axios.get("https://api.jikan.moe/v3/top/anime").then(({data})=>{
        dispatch({type: GET_TOP_ANIME_SUCCESS, payload: data.top});
    }).catch(err=>{
        console.log(err);
    })
}

export const getAnime = id => dispatch => {
    dispatch({type: GET_ANIME_SUCCESS});
    axios.get(`https://api.jikan.moe/v3/anime/${id}`).then(({data})=>{
        console.log(data);
        dispatch({type: GET_ANIME_SUCCESS, payload: data});
    }).catch(err=>{
        console.log(err);
    });
}  

export const getAnimeEps = id => dispatch => {
    dispatch({type: GET_ANIME_EPS_START});
    axios.get(`https://api.jikan.moe/v3/anime/${id}/episodes`).then(({data})=>{
        console.log(data);
        dispatch({type: GET_ANIME_EPS_SUCCESS, payload: data});
    }).catch(err=>{
        console.log(err);
    })
}