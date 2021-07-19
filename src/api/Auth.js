import axios from "axios";

export const login = async (email, password) => {
  let data = { email, password };
  const res = await axios.post("/token", data);
  localStorage.setItem("access_token", res.data.access_token);
  localStorage.setItem("refresh_token", res.data.refresh_token);

  const token = localStorage.getItem("access_token");
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
};
