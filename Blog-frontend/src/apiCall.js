import axios from "axios";
import CONFIG from "./config";
export const getCall = async (path_url) => {
  return axios
    .get(CONFIG.api_endpoint + path_url, {})
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const postCall = async (path_url, payload) => {
  return axios
    .post(CONFIG.api_endpoint + path_url, payload, {})
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error.response;
    });
};

export const putCall = async (path_url, payload) => {
  return axios
    .put(CONFIG.api_endpoint + path_url, payload, {})
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const deleteCall = async (path_url, payload) => {
  return axios
    .delete(CONFIG.api_endpoint + path_url, payload, {})
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
