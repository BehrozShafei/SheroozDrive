import Cookies from "js-cookie";
import AuthService from "../../services/auth.service";

export const useLogin = () => {
  console.log("AuthService().login", typeof AuthService().login);
  const login = async (email: string, password: string) => {
    console.log("AuthService().login1", email, password);
    const user: any = await AuthService().login(email, password);
    if (user) Cookies.set("currentUser", user);
    return user;
  };
  return { login };
};
