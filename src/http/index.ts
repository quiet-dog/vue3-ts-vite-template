import { AxiosResponse } from "@/@types/http";
import axios from "axios";
import { type AxiosRequestConfig } from "axios";
const baseURL = import.meta.env.DEV ? "/api" : "http://localhost:8080";
const http = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

// 设置拦截器
http.interceptors.request.use(
	(config) => {
		config.headers["Authorization"] = "Bearer " + "";
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
http.interceptors.response.use(
	(response) => {
		return Promise.resolve(response);
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default async function myRequest<T>(
	options: AxiosRequestConfig,
): Promise<AxiosResponse<T>> {
	try {
		const res = (await http(options)).data as AxiosResponse<T>;
		return Promise.resolve<AxiosResponse<T>>(res);
	} catch (err) {
		return Promise.reject<AxiosResponse<T>>(err);
	}
}
