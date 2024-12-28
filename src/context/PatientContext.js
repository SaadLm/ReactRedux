import React, { createContext, useState } from "react";
// Création du contexte
export const PatientContext = createContext();
// Fournisseur du contexte
export const PatientProvider = ({ children }) => {
    const [patients, setPatients] = useState([]);
    const addPatient = (newPatient) => {
        setPatients([...patients, newPatient]);
    };
    return (
        <PatientContext.Provider value={{ patients, addPatient }}>
            {children}
        </PatientContext.Provider>
    );
};