// This function will be called while any reducer is created
export function createReducer(initialState, reducerMap) {
    return (state = initialState, action = {}) => {
        const reducer = reducerMap[action.type];

        return reducer ? reducer(state, action.payload) : state;
    };
}

// Call this function from '/constants' folder to create new constant values
export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}