import React from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "../hooks/useForm";

const SearchForm = props => {
    const history = useHistory();
    const initialValues = {query: ""}
    const [formData, handleChange, handleSubmit] = useForm(initialValues, submit);
    
    function submit(){
        history.push(`/search-results?query=${formData.query}`);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="query">
                <input name="query" type="text" value={formData.query} onChange={handleChange}/>
                <button>Submit</button>
            </label>
        </form>
    )
}

export default SearchForm;  