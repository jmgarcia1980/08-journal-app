import { types } from "node-sass";


export const setError = ( err )=> ({
    type: types.uiSetError,
    payload: err
});


export const removeError = ( err )=> ({
    type: types.uiRemoveError,
});

