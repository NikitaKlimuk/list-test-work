import axios from "axios";
import { API_URL } from "../config/apiUrl";

export const getAllUsers = () => axios.get(`${API_URL}/users`);
