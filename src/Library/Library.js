import axios from "axios";


export const api_url = "http://localhost:8000";

console.log(localStorage.getItem("token"))

export const axios_auth = axios.create({
    baseURL: api_url,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });



