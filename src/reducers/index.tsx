import { combineReducers } from 'redux';
import { DeploymentReducer } from './DeploymentReducer';

export const reducers = combineReducers({
    deployments: DeploymentReducer,
});