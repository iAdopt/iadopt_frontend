export const setAnimals = (animalsData) => {
    return (dispatch) => {
        dispatch({
            type: "SET_ANIMALS",
            payload:animalsData
        })
    }
}

export const selectAnimal = (selectAnimal) => {
    return (dispatch) => {
        dispatch({
            type: "SELECTED_ANIMAL",
            payload:selectAnimal
        })
    }
}

export const selectAnimalImages = (selectAnimalImages) => {
    return (dispatch) => {
        dispatch({
            type: "SELECTED_ANIMAL_IMAGES",
            payload:selectAnimalImages
        })
    }
}