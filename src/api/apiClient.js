import axios from "axios";
import ENV from "../config/dotenv";

const api = axios.create({
    baseURL: ENV.API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use((config) => {

    if (config.requiresAuth) {

        const token = localStorage.getItem("accessToken");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    // console.log(ENV)
    return config;
});

export default api;