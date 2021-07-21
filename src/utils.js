import jwt_decode from "jwt-decode";

export const tokenStillValid = () => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return false;
  }
  const decoded = jwt_decode(token);

  if (decoded.exp - Date.now() / 1000 > 0) {
    return true;
  }
  return false;
};

export const handleSignout = (appStateDispatch) => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  appStateDispatch({ type: "SET_AUTH", payload: false });
};
