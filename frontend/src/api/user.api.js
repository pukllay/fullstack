import axios from 'axios';

const userApi = axios.create({
  baseURL: 'http://127.0.0.1:8001/user/api/v1/user/',
});

export const getAllUser = () => userApi.get("/");
export const getUser = (id) => userApi.get(`/${id}/`)
export const createUser = (user) => userApi.post("/", user);
export const deleteUser = (id) => userApi.delete(`/${id}`)
export const updateUser = (id, user) => userApi.put(`/${id}/`, user)
