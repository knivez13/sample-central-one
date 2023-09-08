import axios from "axios";
import router from "@/router";
import { useAuthStore } from "@/stores/authStore.js";
// import { useToast } from "vue-toast-notification";

const service = axios.create({
  baseURL: "http://192.168.3.84:8000/api",
  timeout: 10000, // Request timeout
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

service.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    let token = authStore.get_authorization;
    if (token) {
      config.headers["Authorization"] = "Bearer " + token; // Set JWT token
    }
    // console.log(config); // for debug

    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => {
    // console.log(response.data);
    return response.data;
  },
  (error) => {
    // const $toast = useToast();

    let message = error.message;
    if (error.response.data && error.response.data.errors) {
      message = error.response.data.errors;
    } else if (error.response.data && error.response.data.error) {
      message = error.response.data.error;
    }
    // console.log(error.response.data.data);
    // $toast.warning(error.response.data.data);

    switch (error.response.status) {
      case 200:
        console.log("OK");
        break;
      case 401:
        const authStore = useAuthStore();
        authStore.clear();
        router.push("/login");
        break;
      case 404:
        console.log("Not found");
        break;
      case 419:
        console.log("Session expired");
        break;
      case 500:
        console.log("Internal Server Error");
        break;
      case 503:
        console.log("Down for maintenance");
        break;
      default:
        return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default service;
