import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = import.meta.env.VITE_REST_API_URL;

console.log("Axios instance created with base URL:", instance.defaults.baseURL);

export default class AxiosWrapper {
  static addHeader(name, value) {
    instance.defaults.headers.common[name] = value;
  }
  static removeHeader(name) {
    delete instance.defaults.headers.common[name];
  }

  static setAuthToken(token) {
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete instance.defaults.headers.common["Authorization"];
    }
  }

  static async get(url, params = {}) {
    try {
      const response = await instance.get(url, { params });
      return response.data;
    } catch (error) {
      console.error("GET request failed:", error);
      throw error;
    }
  }

  static async post(url, data = {}) {
    try {
      const response = await instance.post(url, data);
      return response.data;
    } catch (error) {
      console.error("POST request failed:", error);
      throw error;
    }
  }

  // Add other HTTP methods as needed (put, delete, etc.)
}
