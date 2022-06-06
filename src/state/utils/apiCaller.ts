import axios from "axios";

const todoApi = axios.create({
  baseURL: "https://crudcrud.com/api/3732764a4f5d4b7bb046a86649f1ccba",
});

export default todoApi;
