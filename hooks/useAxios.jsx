import { useContext } from "react";
import axios from "axios";
import AuthContext from "../components/common/AuthContext";
import { BASE_URL } from "pages/api/api";

// ========== custom useAxios Hook ==========
//fetches token from context and adds it to an Axios instance

const url = BASE_URL;

export default function useAxios() {
	const [auth] = useContext(AuthContext);

	const apiClient = axios.create({
		baseURL: url,
	});

	apiClient.interceptors.request.use(function (config) {
		const token = auth.token;
		config.headers.Authorization = token ? `Bearer ${token}` : "";
		return config;
	});

	return apiClient;
}
