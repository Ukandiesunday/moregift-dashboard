import { BASE_URL } from "@/env";
import axios from "axios";

// MAKING A GET REQUEST PIPELINE

export const getData = async (endpoint: string) => {
  try {
    const response = await axios.get(endpoint);
    return { data: response?.data };
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error(error?.response?.data?.message);
      throw error?.response?.data?.message || error.message;

      // You can log specific error messages or handle them in a user-friendly way
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error?.request?.message);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error setting up the request:", error.message);
    }
  }
};

// MAKING A POST REQUEST PIPELINE

export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(BASE_URL + endpoint, data, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return { data: response.data };
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error(error?.response?.data?.message);
      throw error?.response?.data?.message || error.message;

      // You can log specific error messages or handle them in a user-friendly way
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error?.request?.message);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error setting up the request:", error.message);
    }
  }
};

// MAKING A CREATE REQUEST PIPELINE

// Create an Axios instance with a base URL
// const api = axios.create({
//   baseURL: BASE_URL,
// });

// Add a request interceptor to include the token in each request
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       // If a token exists, add it to the Authorization header
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     // Return the modified config object to the Axios request pipeline
//     return config;
//   },
//   (error) => {
//     // Handle any errors that occur while configuring the request
//     return Promise.reject(error);
//   }
// );

// export { api };
