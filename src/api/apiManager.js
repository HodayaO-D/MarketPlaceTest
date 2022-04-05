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

const promis_GET = (apiFuncName) => {
  return fetch(`${baseApiUrl}/${apiFuncName}`).then((response) => {
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
    return response.json();
  });
};

const promis_POST = (apiFuncName, params) => {
    console.log(`promis_POST params: ${JSON.stringify(params)}`)
  return fetch(`${baseApiUrl}/${apiFuncName}`, {
    method: "post",
    body: JSON.stringify(params),
    headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
  }).then((response) => {
    debugger;
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
    return response.json();
  });
};

export const helloWorld = () => {
  GET("", (res) => {
    return res;
  });
};

export const productDetails = (productId /*, callback*/) => {
  return new Promise((resolve, reject) => {
    return promis_GET(`productDetails/${productId}`).then((res) => {
      resolve(res);
    });
  });
};

export const createAnonymouseCart = () => {
  return new Promise((resolve, reject) => {
    return promis_POST(`user/anonymous/carts`, {}).then((res) => resolve(res));
  });
};

export const addItemToCart = (params, callback) => {
  return new Promise((resolve, reject) => {
      debugger;
    return promis_POST(`users/anonymous/carts/${params.cartGuid}`, {product: {code: params.productId}}).then((res) => resolve(res));
  });
};
