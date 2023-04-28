import axios from "axios";
// import {store} from "../app/store"
import { refreshToken } from "../features/userSlice";
import jwt_decode from "jwt-decode";

export const axiosPublic = axios.create({
  baseURL: "http://localhost:4001/api",
});
export const axiosPrivate = axios.create({
  baseURL: "http://localhost:4001/api",
});
// const refreshTokenEndpoint = 'https://localhost:4001/api/account/refresh-token';

// let jwtToken = 'existing_access_token';
// let refreshToken = 'existing_refresh_token';
// async function refreshAccessToken() {
//   try {
//     const response = await axios.post(refreshTokenEndpoint, {
//       refresh_token: refreshToken
//     });
//     jwtToken = response.data.access_token;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// }

// //Axios interceptor to handle expired tokens
// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       return refreshAccessToken().then(() => {
//         originalRequest.headers.Authorization = `Bearer ${jwtToken}`;
//         return axios(originalRequest);
//       });
//     }

//     return Promise.reject(error);
//   }
// );

// axiosPrivate.interceptors.request.use(
//   async (config) => {
//     const user = store?.getState()?.userData?.user;

//     let currentDate = new Date();
//     if (user?.accessToken) {
//       const decodedToken = jwt_decode(user?.accessToken);
//       if (decodedToken.exp * 1000 < currentDate.getTime()) {
//         await store.dispatch(refreshToken());
//         if (config?.headers) {
//           config.headers["authorization"] = `Bearer ${
//             store?.getState()?.userData?.user?.accessToken
//           }`;
//         }
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
