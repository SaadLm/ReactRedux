
import React from "react";
import { useSelector } from "react-redux";
const PatientList = () => {
    const patients = useSelector((state) => state.patients);
    return (
        <ul className="list-group ms-5 list-unstyled">
            {patients.map((patient) => (
                <li className="list-group-item-primary" key={patient.id}>{patient.name}</li>
            ))}
        </ul>
    );
};
export default PatientList;