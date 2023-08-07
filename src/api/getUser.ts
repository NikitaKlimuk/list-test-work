import axios from "axios";
import { API_URL } from "../config/apiUrl";

export const getUserById = (id: number) => {
  return axios.get(`${API_URL}/users/${id}`);
};
