import {combineReducers} from 'redux';
import { createStore } from 'redux';
import productReducer from './productReducer';
import shoppingCartReducer from './shoppingCartReducer'
import totalReducer from './totalReducer';
import {BillingAddress} from './BillingAddress';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    productReducer,
    shoppingCartReducer,
    totalReducer,
    form:formReducer,
    BillingAddress,
})

export const store = createStore(
    rootReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );