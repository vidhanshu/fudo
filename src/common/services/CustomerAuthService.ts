import {
  CUSTOMER_SIGNIN_ROUTE,
  CUSTOMER_SIGNOUT_ROUTE,
  CUSTOMER_SIGNUP_ROUTE,
} from "@/configs/routes";
import BaseService from "./BaseService";

export default class CustomerService extends BaseService {
  // Authentication routes
  async signin(email: string, password: string) {
    try {
      const res = await this.post(this.buildURL(CUSTOMER_SIGNIN_ROUTE), {
        email,
        password,
      });
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("token", res.data.data.accessToken);
      }
      return res.data;
    } catch (error) {
      return null;
    }
  }

  async signup(email: string, password: string, name: string) {
    try {
      const res = await this.post(this.buildURL(CUSTOMER_SIGNUP_ROUTE), {
        email,
        password,
        name,
      });
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("token", res.data.data.accessToken);
      }
      return res.data;
    } catch (error) {
      return null;
    }
  }

  async signout() {
    try {
      const res = await this.post(this.buildURL(CUSTOMER_SIGNOUT_ROUTE));
      return res.data;
    } catch (error) {
      return null;
    }
  }

  // Order routes
}
