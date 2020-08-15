import React from "react";

import TopAnime from "./TopAnime";
import SearchForm from "../SearchForm";

const Home = props =>{
    return (
        <div className="home-page">
            <SearchForm/>
            <TopAnime/>
        </div>
    )
}

export default Home;