import {
  ADMIN_ADD_ROUTE,
  ADMIN_GET_ALL_ROUTE,
  ADMIN_REMOVE_ROUTE,
  ADMIN_SIGNIN_ROUTE,
  ADMIN_SIGNOUT_ROUTE,
  ADMIN_UPDATE_ROUTE,
} from "@/configs/routes";
import BaseService from "./BaseService";

export default class AuthService extends BaseService {
  signin(email: string, password: string) {
    return this.post(this.buildURL(ADMIN_SIGNIN_ROUTE), { email, password });
  }

  signout() {
    return this.post(this.buildURL(ADMIN_SIGNOUT_ROUTE));
  }

  signup(email: string, password: string) {
    return this.post(this.buildURL(ADMIN_ADD_ROUTE), { email, password, name });
  }

  getAllAdmins() {
    return this.get(this.buildURL(ADMIN_GET_ALL_ROUTE));
  }

  updateAdmin() {
    return this.put(this.buildURL(ADMIN_UPDATE_ROUTE));
  }

  removeAdmin(id: string) {
    return this.delete(this.buildURL(ADMIN_REMOVE_ROUTE(id)));
  }
}
