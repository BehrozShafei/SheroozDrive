import { deepStrictEqual } from "assert";
import Cookies from "js-cookie";
import AuthService from "../../services/auth.service";

export const useLogin = () => {
  const login = async (email: string, password: string) => {
    const user: any = await AuthService().login(email, password);
    if (user) Cookies.set("currentUser", user);
    return user;
  };
  return { login };
};
