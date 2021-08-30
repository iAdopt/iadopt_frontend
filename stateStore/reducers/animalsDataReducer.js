const types = {
    SET_ANIMALS: "SET_ANIMALS",
    SELECTED_ANIMAL: "SELECTED_ANIMAL"
}

const initialAnimalData = {
    data: [],
}

export const animalDataReducer = (state = [], {type, payload}) => {
    switch (type) {
        case types.SET_ANIMALS:
            return {...state,...payload}
        default:
            return state
    }
}

export const selectedAnimalReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case types.SELECTED_ANIMAL:
            return {...state, ...payload}
        default:
            return state
    }
}
