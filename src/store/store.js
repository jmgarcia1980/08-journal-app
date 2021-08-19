import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


// es para tener varios reducer al mismo tiempo ya que createStore solo recibe un reducer como parametro
const reducers = combineReducers({
    auth: authReducer,
});


// export const store = createStore(
//     reducers, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );

export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware( thunk )
    )
);

