import axios, {AxiosInstance} from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: "https://api.weatherapi.com/v1/",
    headers: {
        "Content-Type": "application/json",
    }
});

