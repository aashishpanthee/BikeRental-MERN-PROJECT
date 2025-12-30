import axios from "axios";

const Http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

Http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Http;

// import Axios from "axios";
// const userToken = localStorage.getItem("userToken")
//   ? localStorage.getItem("userToken")
//   : null;

// console.log(userToken, "=====================================after login");

// let urls = {
//   test: `http://localhost:5001/`,
//   development: "http://localhost:5001/",
// };
// const Http = Axios.create({
//   baseURL: process.env.NODE_ENV,
//   headers: {
//     Authorization: `${userToken}`,
//   },
// });

// export default Http;
// import axios from "axios";
