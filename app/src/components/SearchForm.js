import React from "react";
import {useForm} from "../hooks/useForm";

const SearchForm = props => {
    const initialValues = {query: ""}
    const [formData, handleChange, handleSubmit] = useForm(initialValues, submit);
    
    
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