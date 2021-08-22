import { combineReducers } from "redux";
import {selectedAnimalReducer, animalDataReducer} from "./animalsDataReducer"

 const reducers = combineReducers({
    allAnimals: animalDataReducer,
    animal: selectedAnimalReducer
});

export default reducers