import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./store";
import PatientList from "./components/PatientList";
import AddPatient from "./components/AddPatient";
function App() {
    return (
        <Provider store={store}>
            <div className="fw-bold">
                <h1 className="text-primary fw-bolder">Gestion des Patients avec Redux</h1>
                <AddPatient />
                <PatientList />
            </div>
        </Provider>
    );
}
export default App;