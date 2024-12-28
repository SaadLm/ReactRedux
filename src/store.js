import { configureStore, createSlice } from "@reduxjs/toolkit";
// Création du slice pour les patients
const patientSlice = createSlice({
    name: "patients",
    initialState: [],
    reducers: {
        addPatient: (state, action) => {state.push(action.payload);
        },
    },
});
// Export des actions
export const { addPatient } = patientSlice.actions;
// Création du store
const store = configureStore({
    reducer: {
        patients: patientSlice.reducer,
    },
});
export default store;