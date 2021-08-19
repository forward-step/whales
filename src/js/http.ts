import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

const client = axios.create({
    transformRequest: [
        (data, headers) => {
            if (
                headers['Content-Type'] === 'application/x-www-form-urlencoded'
            ) {
                return qs.stringify(data);
            }
            return JSON.stringify(data);
        },
    ],
});

// 请求之前
client.interceptors.request.use((config) => {
    if (!config.headers['Content-Type']) {
        if (config.method === 'GET') {
            config.headers['Content-Type'] =
                'application/x-www-form-urlencoded';
        } else {
            config.headers['Content-Type'] = 'application/json';
        }
    }
    return config;
});

export function http(endpoint: string, config: AxiosRequestConfig = {}) {
    return client(endpoint, {
        method: 'GET',
        ...config,
    });
}
