import axios from 'axios';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import NavigationService from "@navigation/NavigationService";
import API_URL from './API_URL';

const API = axios.create({
  baseURL: API_URL,
});

console.log(API_URL);

// Add a request interceptor to attach the token to outgoing requests
API.interceptors.request.use(async config => {
  // const token = await AsyncStorage.getItem("token");
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

// Add a response interceptor to handle token expiration
API.interceptors.response.use(
  response => response,
  async error => {
    if (error.response) {
      const {status} = error.response;

      // // Check if the error status indicates token expiration
      // if (status === 401 || status === 403) {
      //   // Handle token expiration here, e.g., prompt user to log in again
      //   await AsyncStorage.removeItem("token");
      //   console.log("Token expired. Please log in again.");
      //   NavigationService.navigate("login");
      // }

      return Promise.reject(error);
    }
  },
);

export default API;
