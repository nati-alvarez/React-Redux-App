import {
    GET_TOP_ANIME_START, GET_TOP_ANIME_SUCCESS,
    GET_ANIME_START, GET_ANIME_SUCCESS, CLEAR_ANIME, GET_ANIME_EPS_SUCCESS
} from "../actions";

const initialState = {
    anime: null,
    topAnimeLoading: false,
    topAnime: [],
    animes: []
}

export const reducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_TOP_ANIME_START:
            return {
                ...state,
                topAnimeLoading: true
            }
        case GET_TOP_ANIME_SUCCESS:
            return {
                ...state,
                topAnimeLoading: false,
                topAnime: action.payload
            }
        case GET_ANIME_SUCCESS:
            return {
                ...state,
                anime: {
                    ...action.payload,
                    episodes: []
                }
            }
        case CLEAR_ANIME:
            return {
                ...state,
                anime: null
            }
        case GET_ANIME_EPS_SUCCESS:
            return {
                ...state,
                anime: {
                    ...state.anime,
                    episodes: action.payload.episodes
                }
            }
        default:
            return state;
    }
}