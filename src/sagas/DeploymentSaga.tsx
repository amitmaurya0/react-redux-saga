import { put, takeLatest, all } from 'redux-saga/effects';
import {select} from 'redux-saga/effects';
import axios from 'axios';
import { urls } from '../config/urls';
import { DeploymentInterface } from '../interfaces/DeploymentInterface';

interface deploymentReturn {
    data: Array<DeploymentInterface>,
    status: boolean
}

function* fetchDeplyments() {
    let url = urls.deployment
 
  const json: deploymentReturn = yield axios.get(url)
                        .then(function (response) {
                            return response.data;
                        })
                        .catch(function (error) {
                          return [];
                        }); 
    yield put({ type: "ALL_DEPLOYMENTS", payload: json }); 
}

function* actionWatcher() {
     yield takeLatest('GET_DEPLOYMENTS', fetchDeplyments)
}


export const deplymentSaga = [
  actionWatcher()
]