import { combineReducers } from "redux";
import { selectedAnimalReducer, animalDataReducer, selectedAnimalImagesReducer } from "./animalsDataReducer"

const reducers = combineReducers({
    allAnimals: animalDataReducer,
    singleAnimal: selectedAnimalReducer,
    singleAnimalImages: selectedAnimalImagesReducer
});

export default reducers