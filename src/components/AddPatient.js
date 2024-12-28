import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient } from "../store";
const AddPatient = () => {const [name, setName] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            dispatch(addPatient({ id: Date.now(), name }));
            setName("");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input"
                type="text"
                placeholder=" Nom du patient"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button className="btn" type="submit"><span className="fw-bold">Ajouter</span></button>
        </form>
    );
};
export default AddPatient;