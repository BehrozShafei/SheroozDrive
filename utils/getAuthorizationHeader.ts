import Cookies from "js-cookie";

export function getAuthorizationHeader() {
  const currentUser = Cookies.get("currentUser");
  debugger;
  return {
    Authorization: `Bearer ${currentUser || ""}`,
  };
}
