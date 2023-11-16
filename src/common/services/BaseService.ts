import { BASE_URL } from "@/configs/routes";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { getCookie } from "../utils/utils";

export default class BaseService {
  buildURL(path: string) {
    return `${BASE_URL}${path}`;
  }

  getAxiosConfig(): AxiosRequestConfig {
    return {
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    };
  }

  async get(path: string, params?: object): Promise<AxiosResponse<any>> {
    const response = await axios.get(path, {
      params,
      ...this.getAxiosConfig(),
    });
    return response;
  }

  async post(path: string, body?: object): Promise<AxiosResponse<any>> {
    const response = await axios.post(path, body, {
      ...this.getAxiosConfig(),
    });
    return response;
  }

  async put(path: string, body?: object): Promise<AxiosResponse<any>> {
    const response = await axios.put(path, body, {
      ...this.getAxiosConfig(),
    });
    return response;
  }

  async patch(path: string, body?: object): Promise<AxiosResponse<any>> {
    const response = await axios.patch(path, body, {
      ...this.getAxiosConfig(),
    });
    return response;
  }

  async delete(path: string): Promise<AxiosResponse<any>> {
    const response = await axios.delete(path, {
      ...this.getAxiosConfig(),
    });
    return response;
  }
}
