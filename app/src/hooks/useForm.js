import {useState} from "react";

export function useForm(initialValues, submitAction){
    const [formData, setFormData] = useState(initialValues);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        submitAction();
    }

    return [formData, handleChange, handleSubmit];
}