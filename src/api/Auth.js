import axios from "axios";

export const login = async (
  email,
  password,
  appStateDispatch,
  setLoginError
) => {
  let data = { email, password };
  try {
    const res = await axios.post("/token", data);
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
    const token = localStorage.getItem("access_token");
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    appStateDispatch({ type: "SET_AUTH", payload: true });
    setLoginError("");
  } catch (err) {
    setLoginError(err.response.data.detail);
  }
};
