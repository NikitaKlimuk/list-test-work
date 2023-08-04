import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getAllUsers = () => axios.get(`${API_URL}/users`);
