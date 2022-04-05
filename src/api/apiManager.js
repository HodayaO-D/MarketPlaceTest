import axios from "axios";

const baseApiUrl = "http://localhost:8080/api";

const GET = (apiFuncName, callback) => {
  axios
    .get(`${baseApiUrl}/${apiFuncName}`)
    .then((res) => {
      console.log(`api call ${apiFuncName} result: ${JSON.stringify(res)}`);
      callback(res.data);
    })
    .catch((err) => console.log(`error on api call ${apiFuncName} ${err}`));
};

const POST = (apiFuncName, params, callback) => {
  axios
    .post(`${baseApiUrl}/users/anonymous/carts`, params)
    .then((res) => {
      console.log(res);
      callback(res.data);
    })
    .catch((err) => console.log(`error on api call ${apiFuncName} ${err}`));
};
export const helloWorld = () => {
  GET("", (res) => {
    return res;
  });
};

export const productDetails = (productId, callback) => {
  GET(`productDetails/${productId}`, (res) => {
    callback(res);
  });
};

export const createAnonymouseCart = (callback) => {
  POST(`user/anonymous/carts`, {}, (res) => {
    callback(res);
  });
};
