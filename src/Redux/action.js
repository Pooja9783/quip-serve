import { GET_ALL_DATA, DELETE_DATA } from "./actionType";
const axios = require("axios");

export const getApiData = (data) => ({
  type: GET_ALL_DATA,
  payload: data,
});

export const getData = (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
      console.log(res.data);
      dispatch(getApiData(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};
