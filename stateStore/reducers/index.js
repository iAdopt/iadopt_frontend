import { combineReducers } from "redux";
import {selectedAnimalReducer, animalDataReducer} from "./animalsDataReducer"

 const reducers = combineReducers({
    allAnimals: animalDataReducer,
    singleAnimal: selectedAnimalReducer
});

export default reducers