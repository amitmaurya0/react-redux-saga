
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware  from 'redux-saga';
import { logger } from 'redux-logger';
import { reducers } from '../reducers';
import rootSaga from './../sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState = {}) {
    const store = createStore(
                    reducers,  
                    applyMiddleware(sagaMiddleware, logger)
                );
    return store;
}

export const store = configureStore();
sagaMiddleware.run(rootSaga);