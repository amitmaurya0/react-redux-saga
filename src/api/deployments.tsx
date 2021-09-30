import axios from "axios";
import { urls } from "../config/urls";

export const saveDepoyment = (data={}) =>{
    let url = urls.deployment;
    
    return axios.post(url, data)
      .then(function (response) {
            return response.data;
      })
      .catch(function (error) {
        console.log(error);
    });
  }
export const deleteDeployment = (id: string) =>{
    let url = `${urls.deployment}/${id}`;
    
    return axios.delete(url)
      .then(function (response) {
            return response.data;
      })
      .catch(function (error) {
        console.log(error);
    });
  }