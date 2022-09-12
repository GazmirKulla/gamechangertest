// axios configurations

import axios from "axios";
// eslint-disable-next-line import/no-cycle
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const headers = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const Api = axios.create({
  validateStatus(status) {
    switch (status) {
      case 500:
        // error 500
        break;
      case 400:
        // Bad Request, maybe the data you are using are not correct!`
        break;
      case 401:
        // message: 'Your Session is Expired!'
        break;
      case 403:
        // 'The request is forbiden for you!',
        break;
      case 404:
        // 'Page Not found',
        break;
      default:
        return status >= 200 && status <= 503;
    }
    return false;
    // request finished
  },
  baseURL: BASE_URL,
});

Api.interceptors.request.use(
  function (config) {
    // the request has started,  do something
    return {
      ...config,
      headers: headers(),
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  function (response) {
    // the request has end, do something
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default Api;
