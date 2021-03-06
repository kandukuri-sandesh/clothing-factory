import {createStore,applyMiddleware} from 'redux';
import persistStore from 'redux-persist/es/persistStore';  
import logger from 'redux-logger';

import rootReducer from "./root-reducer";

const middleware = [logger];

export const store = createStore(rootReducer,applyMiddleware(...middleware))

export const persistor = persistStore(store);

export default {store,persistor}; 